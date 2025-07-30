'use server';

import { checkUser } from '@/lib/checkUser';
import { db } from '@/lib/db';
import { generateAIAnswer, ExpenseRecord } from '@/lib/ai';
import { Record as PrismaRecord } from '@prisma/client'; // ✅ Import Prisma type

export async function generateInsightAnswer(question: string): Promise<string> {
    try {
        const user = await checkUser();
        if (!user) {
            throw new Error('User not authenticated');
        }

        // Get user's recent expenses (last 30 days)
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

        const expenses: PrismaRecord[] = await db.record.findMany({
            where: {
                userId: user.clerkUserId,
                createdAt: {
                    gte: thirtyDaysAgo,
                },
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 50, // Limit to recent 50 expenses for analysis
        });

        // Convert to format expected by AI
        const expenseData: ExpenseRecord[] = expenses.map((expense: PrismaRecord) => ({
            id: expense.id,
            amount: expense.amount,
            category: expense.category || 'Other',
            description: expense.text,
            date: expense.createdAt.toISOString(),
        }));

        // Generate AI answer
        const answer = await generateAIAnswer(question, expenseData);
        return answer;
    } catch (error) {
        console.error('Error generating insight answer:', error);
        return "I'm unable to provide a detailed answer at the moment. Please try refreshing the insights or check your connection.";
    }
}
