// api/lanyard.ts

export interface PresenceData {
    data: {
        spotify: {
            track_id: string;
            timestamps: {
                start: number;
                end: number;
            };
            album: string;
            album_art_url: string;
            artist: string;
            song: string;
        }
        discord_user: {
            id: string;
            username: string;
            avatar: string | null;
            discriminator: string;
            global_name: string | null;
        };
        activities: {
            id: string;
            name: string;
            type: number;
            state: string;
            session_id: string;
            details: string;
            timestamps: {
                start: number;
            };
            application_id: string;
            assets: {
                large_image: string;
                large_text: string;
                small_image: string;
                small_text: string;
            };
            created_at: number;
            buttons: string[];
        }[];
        discord_status: string;
        listening_to_spotify:boolean;
    };
}

export const fetchPresence = async (): Promise<PresenceData | null> => {
    try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/216348218315767808`);
        if (response.ok) {
            const data = await response.json();
            return data as PresenceData;
        } else {
            console.error("Failed to fetch presence information");
            return null;
        }
    } catch (error) {
        console.error("An error occurred while fetching presence information:", error);
        return null;
    }
};


export default fetchPresence;
