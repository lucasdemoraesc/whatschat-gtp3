import { openai } from './openai';

export const getDalleResponse = async (clientText) => {
    const options = {
        prompt: clientText, // Descrição da imagem
        n: 1, // Número de imagens a serem geradas
        size: "1024x1024", // Tamanho da imagem
    };

    try {
        const response = await openai.createImage(options);
        return response.data.data[0].url;
    } catch (e) {
        return `❌ OpenAI Response Error: ${e.response.data.error.message}`;
    }
};
