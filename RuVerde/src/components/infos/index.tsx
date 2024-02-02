import React from "react";
import { View, Text} from "react-native";
import { styled } from "nativewind";
import LinhaInfo from "./internoInfo";

type props = {
    title: string;
    contentOne?: string;
    contentTwo?: string;
    contentThree?: string;
    titleOne?: string;
    titleTwo?: string;
    titleThree?: string;

};


type valoresProps = {
    category: string;
    price: number;
};

type valorProps = { 
   valores: valoresProps[];
}

const StyledHorario = ({
    title, contentOne, contentTwo, contentThree, titleOne, titleTwo, titleThree, ...rest
}: props) => {
    return (
        <View  
            {...rest}
            className='flex items-center p-4 px-4 rounded-md w-80 mb-6 border-2 border-b-8 border-emerald-700' 
        >
            <Text className="text-2xl font-bold mb-3 self-center text-emerald-900">
                {title}
            </Text>

            {titleOne &&
                <LinhaInfo
                title={titleOne}
                content={contentOne}
                />
            }
            {titleTwo &&
                <LinhaInfo
                    title={titleTwo}
                    content={contentTwo}
                />
            }
                        
            {titleThree &&
                <LinhaInfo
                title={titleThree}
                content={contentThree}
                />
            }
            
        </View>
    );
};
const Horario = styled(StyledHorario);

const StyledValores = ({valores}: valorProps) => {
  console.log("valores", valores);
  return (
        <View 
            className='flex items-center p-4 px-4 rounded-md w-80 mb-6 border-2 border-b-8 border-emerald-700' 
        >
            <Text className="text-2xl font-bold mb-3 self-center text-emerald-900">
                Valores
            </Text>

            {valores &&
           valores.map((valor: valoresProps) => (      
              <LinhaInfo key={valor.category}                
                title={valor.category}
                content={valor.price.toString()}
              />
            ))}
            
        </View>
    );
};
const Valores = styled(StyledValores);


export { Horario, Valores };