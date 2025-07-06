"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"


const ContactCard = () => {
    return (
        <>
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center gap-8 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/3"
                        >
                            <Card className="text-center p-8 h-full">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-[#0C708E] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Mail className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black mb-2">Mail Here</h3>
                                    <a
                                        href="mailto:harisahmed88888@gmail.com"
                                        className="text-[#0C708E] hover:underline"
                                        aria-label="Send an email to harisahmed88888@gmail.com"
                                    >
                                        harisahmed88888@gmail.com
                                    </a>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/3"
                        >
                            <Card className="text-center p-8 h-full">
                                <CardContent className="p-0">
                                    <div className="w-16 h-16 bg-[#0C708E] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Phone className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-black mb-2">Call Here</h3>
                                    <p className="text-gray-600 text-sm space-y-2">
                                        <a
                                            href="tel:923062249967"
                                            className="block text-[#0C708E] hover:underline"
                                            aria-label="Call UK office"
                                        >
                                            PK +92 306 2249967
                                        </a>
                                        <a
                                            href="tel:923708622374"
                                            className="block mt-2 text-[#0C708E] hover:underline"
                                            aria-label="Call US office"
                                        >
                                            PK +92 370 8622374
                                        </a>
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactCard

