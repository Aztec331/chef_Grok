//import { HfInference } from '@huggingface/inference'




// 🚨👉 ALERT: Read message below! You've been warned! 👈🚨
// If you're following along on your local machine instead of
// here on Scrimba, make sure you don't commit your API keys
// to any repositories and don't deploy your project anywhere
// live online. Otherwise, anyone could inspect your source
// and find your API keys/tokens. If you want to deploy
// this project, you'll need to create a backend of some kind,
// either your own or using some serverless architecture where
// your API calls can be made. Doing so will keep your
// API keys private.





// Make sure you set an environment variable in Scrimba 
// for HF_ACCESS_TOKEN

// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)
// console.log("HF Token:", import.meta.env.VITE_HF_ACCESS_TOKEN)

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ")
//     try {
//         const response = await hf.chatCompletion({
//             model: "HuggingFaceH4/zephyr-7b-beta",
//             messages: [
//                 { role: "system", content: SYSTEM_PROMPT },
//                 { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
//             ],
//             max_tokens: 1024,
//         })
//         return response.choices[0].message.content
//     } catch (err) {
//         console.error(err.message)
//     }
// }

// const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN);
// console.log("HF Token:", import.meta.env.VITE_HF_ACCESS_TOKEN);

// export async function getRecipeFromMistral(ingredientsArr) {
//     const ingredientsString = ingredientsArr.join(", ");

//     try {
//         const response = await hf.textGeneration({
//             model: "mistral-community/Mistral-7B-Instruct-v0.1",
//             inputs: `
// SYSTEM: You are a recipe AI. Use markdown formatting.
// USER: Make a recipe with these ingredients: ${ingredientsString}
// `,
//             parameters: {
//                 max_new_tokens: 300,
//                 temperature: 0.7,
//             }
//         });

//         return response.generated_text;
//     } catch (err) {
//         console.error("HF inference error:", err);
//         return "Error: Could not get recipe.";
//     }
// }

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`

export async function getRecipeFromBackend(ingredientsArr) {
    const response = await fetch("http://localhost:3001/recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients: ingredientsArr })
    });

    const data = await response.json();
    return data.recipe;
}




