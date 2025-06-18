import React from 'react';

const TechIcon = ({ tech }) => {
  const iconMap = {
    'Python': './icons/python.svg',
    'TensorFlow': './icons/tensorflow.svg',
    'PyTorch': './icons/pytorch.svg',
    'Scikit-Learn': './icons/scikit-learn.svg',
    'Keras': './icons/keras.svg',
    'Java': './icons/java.svg',
    'Swift': './icons/swift.svg',
    'Azure': './icons/azure.svg',
    'AWS': './icons/aws.svg',
    'Docker': './icons/docker.svg',
    "OpenAI API": './icons/openai.svg',
    'JavaScript': './icons/javascript.svg'
  };

  const iconPath = iconMap[tech];
  
  return iconPath ? (
    <span className="flex items-center px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm hover:bg-purple-500/30 transition-colors duration-200">
      <img src={iconPath} alt={tech} className="w-4 h-4 mr-2" />
      {tech}
    </span>
  ) : (
    <span className="px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm hover:bg-purple-500/30 transition-colors duration-200">
      {tech}
    </span>
  );
};

export default TechIcon;