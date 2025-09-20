"use client"

import { useCallback, useEffect, useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/app/components/ui/dialog"
import { Loader2, Play } from "lucide-react"
import { buildEmbedUrl, getYoutubeThumbnails } from "@/app/utils/getYoutubeThumbnail"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface BaseVideoPlayerProps {
    type: "default" | "dialog"
    videoUrl: string
}

interface DefaultVideoPlayerProps extends BaseVideoPlayerProps {
    type: "default"
}

interface DialogVideoPlayerProps extends BaseVideoPlayerProps {
    type: "dialog"
    open: boolean
    onClose: () => void
}

type VideoPlayerProps = DefaultVideoPlayerProps | DialogVideoPlayerProps

export function VideoPlayer({
    type,
    videoUrl,
    ...props
}: VideoPlayerProps) {
    if (type === "dialog") {
        const { open, onClose } = props as DialogVideoPlayerProps
        return <DialogPlayer type="dialog" videoUrl={videoUrl} open={open} onClose={onClose} />
    }
    return <DefaultPlayer type="default" videoUrl={videoUrl} />
}



function DefaultPlayer({ videoUrl }: DefaultVideoPlayerProps) {
    const src = buildEmbedUrl(videoUrl)
    return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden border-2 border-primary/50 bg-black">
            <iframe
                className="absolute inset-0 size-full"
                src={src}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    )
}

function DialogPlayer({
    videoUrl,
    open,
    onClose,
}: DialogVideoPlayerProps) {

    const [loaded, setLoaded] = useState(false)

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="rounded-2xl shadow-xl relative w-[90%] max-w-5xl"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: "spring", duration: 0.4 }}
                    >

                        {/* Vídeo do YouTube */}
                        <div className="aspect-video w-full rounded-md overflow-hidden relative">
                            <iframe
                                width="100%"
                                height="100%"
                                loading="lazy"
                                onLoad={() => setLoaded(true)}
                                src={buildEmbedUrl(videoUrl, open)}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded"
                                sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms allow-popups allow-popups-to-escape-sandbox"
                            ></iframe>

                            {!loaded && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/70">
                                    <Loader2 className="w-10 h-10 animate-spin text-white" />
                                </div>
                            )}
                        </div>

                    </motion.div>
                    {/* Botão de fechar */}
                    <Button
                        onClick={onClose}
                        className="absolute top-3 right-3 rounded-full "
                        variant="ghost"
                        size="icon"
                    >
                        <X size={28} />
                    </Button>

                </motion.div>
            )}
        </AnimatePresence>
    )
}