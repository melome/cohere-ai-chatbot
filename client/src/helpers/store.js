import { create } from 'zustand';
import { setLocalStorage, getLocalStorage } from './localstorage';
import { chat as chatAPI } from './api';

const initialState = {
    chat_history: [],
    conversation_id: "",
}

const useStore = create((set, get) => ({
    chat_history: getLocalStorage("chat_history") || initialState.chat_history,
    conversation_id: getLocalStorage("conversation_id") || initialState.conversation_id,

    chat: async (message) => {
        // Get the current conversation_id from the state
        const { conversation_id } = get();

        // Make the chat API request
        const chatAPIResponse = await chatAPI(message, conversation_id);
        // Extract the response from the API response
        const response = chatAPIResponse.chat_history[chatAPIResponse.chat_history.length - 1];


        // Update the chat history with the new response
        set((state) => ({ chat_history: [...state.chat_history, response] }));

        // If the conversation_id is not set, update it in both the state and localStorage
        if (!conversation_id) {
            set({ conversation_id: chatAPIResponse.conversation_id });
            setLocalStorage("conversation_id", chatAPIResponse.conversation_id);
        }
    },

    addMessage: (role, message) => set((state) => ({ chat_history: [...state.chat_history, { role, message }] })),
    getChatHistory: () => get().chat_history,
    reset: () => {
        set({ ...initialState });
        setLocalStorage("chat_history", initialState.chat_history);
        setLocalStorage("conversation_id", initialState.conversation_id);
    }
}));

export default useStore