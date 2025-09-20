"use client"

export const getYoutubeThumbnails = (videoUrls: string[]): {
    id: string
    url: string
}[] => {
    const thumbnails = videoUrls.map((url) => {
        const urlObj = new URL(url);
        let videoId: string | null = null;

        videoId = urlObj.searchParams.get("v");

        if (!videoId && urlObj.pathname.startsWith("/shorts/")) {
            videoId = urlObj.pathname.split("/shorts/")[1];
        }

        if (videoId && videoId.includes("?")) {
            videoId = videoId.split("?")[0];
        }

        return {
            id: videoId as string,
            url: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        };
    });

    return thumbnails;
};


export function buildEmbedUrl(url: string, autoplay = false): string {
    const id = getYoutubeThumbnails([url])[0]?.id
    const params = new URLSearchParams({
        rel: "0",
        modestbranding: "1",
        color: "white",
        autoplay: autoplay ? "1" : "0",
        controls: "1",
    })
    return id ?
        `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`
        : url
}
