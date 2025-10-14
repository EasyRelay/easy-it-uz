import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
    const handlePhoneCall = () => {
        window.location.href = 'tel:+998946834489';
    };

    const handleTelegramMessage = () => {
        window.open('https://t.me/easyituz', '_blank');
    };

    const buttonVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 260,
                damping: 10,
                delay: 2
            }
        },
        hover: {
            scale: 1.1,
            transition: { duration: 0.2 }
        },
        tap: { scale: 0.95 }
    };

    const floatingAnimation = {
        y: [0, 0, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut" as const
        }
    };

    const phoneRingingAnimation = {
        rotate: [0, -15, 15, -10, 10, -5, 5, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "easeInOut" as const
        }
    };

    const soundWaveAnimation = {
        scale: [1, 2.5, 1],
        opacity: [0.8, 0, 0.8],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut" as const
        }
    };

    const soundWaveAnimation2 = {
        scale: [1, 3, 1],
        opacity: [0.6, 0, 0.6],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            delay: 0.3,
            ease: "easeOut" as const
        }
    };

    const soundWaveAnimation3 = {
        scale: [1, 3.5, 1],
        opacity: [0.4, 0, 0.4],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            delay: 0.6,
            ease: "easeOut" as const
        }
    };

    return (
        <>
            <motion.button
                onClick={handlePhoneCall}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-green-500 to-green-600 
                   text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 
                   transition-all duration-300 group"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
            >
                <motion.div
                    animate={floatingAnimation}
                    className="relative"
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-green-300"
                        animate={soundWaveAnimation}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-green-400"
                        animate={soundWaveAnimation2}
                    />
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-green-500"
                        animate={soundWaveAnimation3}
                    />

                    <motion.div
                        animate={phoneRingingAnimation}
                        className="relative z-10"
                    >
                        <Phone className="w-6 h-6" />
                    </motion.div>
                </motion.div>

                <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm 
                        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                        whitespace-nowrap">
                    Call us
                </div>
            </motion.button>

            <motion.button
                onClick={handleTelegramMessage}
                className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-blue-500 to-blue-600 
                   text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 
                   transition-all duration-300 group"
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                whileTap="tap"
            >
                <motion.div
                    animate={floatingAnimation}
                    className="relative"
                >
                    <MessageCircle className="w-6 h-6" />
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-400"
                        animate={{
                            scale: [1, 2, 1],
                            opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />
                </motion.div>
                <div className="absolute bottom-full left-0 mb-2 px-3 py-1 bg-black/80 text-white text-sm 
                        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                        whitespace-nowrap">
                    Message us
                </div>
            </motion.button>
        </>
    );
};

export default FloatingButtons;