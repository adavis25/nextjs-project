import Image from "next/image";

export default function Card({title, subtitle, image, children}: {title: string, subtitle : string, image: any, children: string}){
    return (
            <div className="max-w-lg rounded-xl bg-gray-200 overflow-hidden shadow-lg">
                <h1 className="font-bold text-xl pt-5 px-5 mb-1 text-gray-700">{title}</h1>
                <h4 className="px-5 text-gray-700">{subtitle}</h4>
                    {image && <Image className="w-full" src={image} alt="A picture" />}
                    <div className="px-6 py-4">
                        <div className="text-gray-700 text-base">{children}</div>
                    </div>
                </div>
    );
}