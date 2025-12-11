import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCakeIdea = async (occasion: string, flavor: string, preferences: string) => {
  if (!apiKey) {
    console.warn("API Key is missing for Gemini");
    return "Please configure the API Key to use the AI suggestion feature.";
  }

  try {
    const prompt = `
      You are an expert cake decorator for a home bakery called 'Gurparsad Creations' that specializes in:
      - 100% Vegetarian (Eggless)
      - No Fondant (Fresh Cream only)
      - Homemade, rustic, elegant styles.
      
      Suggest a creative cake design concept for the following request:
      Occasion: ${occasion}
      Flavor Preference: ${flavor}
      Additional Notes: ${preferences}

      Keep the suggestion concise (under 80 words). Focus on visual description (colors, piping style) and flavor pairings. 
      Remember: Do NOT suggest fondant figures. Suggest fresh flowers, fruit, or piping techniques instead.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating cake idea:", error);
    return "Sorry, we couldn't generate an idea right now. Please try again later or contact us directly!";
  }
};
