"use server";

export async function saveWorkLog(data) {
    const supabase = await createClient;

    const { error } = await supabase
        .from("work_logs")
        .insert([
            {
                date: date.date,
                hours: parseFloat(data.hours),
                notes: data.notes,
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