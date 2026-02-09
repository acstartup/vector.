"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

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
        .from("work_logs")
        .insert([
            {
                date: date.date,
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