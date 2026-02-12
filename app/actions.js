"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function getWorkLogs() {
    const { data, error } = await supabase
        .from("work_logs")
        .select("*")
        .order("date", { ascending: false });
    
    if (error) {
        console.error("Supabase Error: ", error.message);
        return { success: false, error: error.message, data: []};
    }

    return { success: true, data }
}

export async function saveWorkLog(data) {
    const { error } = await supabase
        .from("work_logs")
        .insert([
            {
                date: data.date,
                hours: parseFloat(data.workHours),
                notes: data.workNotes,
                unit: data.unit
            }
        ]);

    if (error) {
        console.error("Supabase Error: ", error.message);
        return { success: false, error: error.message };
    }

    // refreshes page data without full reload
    revalidatePath("/work")
    return { success: true }
}

export async function saveLift(data) {
    const { error } = await supabase
        .from("lift_logs")
        .insert([
            {
                date: data.date,
                sessionName: data.sessionName,
                excercises: excercises, /* updated excercises, not proper var */
                notes: data.liftNotes
            }
        ]);

    if (error) {
        console.error("Supabase Error: ", error.message);
        return { success: false, error: error.message };
    }

    revalidatePath("/lift")
    return { success: true }
}

export async function saveHabit(data) {
    const { error } = await supabase
        .from("habit_logs")
        .insert([
            {
                date: data.date,
                active_days: data.activeDays,
                habit_name: data.habitName,
                notes: data.habitNotes,
            }
        ])
    if (error) {
        console.error("Supabase Error: ", error.message);
        return { success: false, error: error.message };
    }

    revalidatePath("/todo")
    return { success: true }
}

export async function saveWeight(data) {
    const { error } = await supabase
        .from("weight_logs")
        .insert([
            {
                date: data.date,
                weightAmount: data.weightAmount,
                unit: data.units,
                notes: data.weightNotes,
            }
        ])
    if (error) {
        console.error("Supabase Error: ", error.message);
        return { success: false, error: error.message };
    }
    
    revalidatePath("/weight")
    return { success: true }
}