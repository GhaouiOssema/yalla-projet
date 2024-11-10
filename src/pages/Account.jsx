import React, { useState } from 'react';
import Button from "../components/forms/Button";
import Inpute from "../components/forms/Inpute";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import MuiSwitch from '@mui/material/Switch';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import Profile from"../assets/Profile.png";

import { postData } from "../components/apiAndFunction/apiService";
import { API_ENDPOINTS } from "../components/apiAndFunction/apiEndpoints";

const Account = () => {
  const [selectedImages, setSelectedImages] = useState("");
  const [FormData, setFormData] = useState({
    UserId:"21",
    currentPassword: "",
    newPassword: "",
    vefifiedPassword: "",
  });

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setSelectedImages((prevImages) => [...prevImages, ...imageUrls]);
  };
 
  const SwitchOnOf = styled((props) => (
    <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#fbbf24' :'#fbbf24',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  }));
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      // Post the card form data to the backend API
      await postData(API_ENDPOINTS.Update_Password, FormData);
      alert("Card added successfully!");

      // Reset form data after submission
      setFormData({
        currentPassword: "",
        newPassword: "",
        vefifiedPassword: "",
      });
    } catch (error) {
      console.error("Error adding card:", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="flex min-h-screen w-full bg-white dark:bg-gray-900">
      <main className="flex-1 p-2 md:p-10">
        <div className="mx-auto max-w-4xl space-y-3">
          <div className="mt-10">
            <h1 className="text-3xl font-bold">Paramètres du profil</h1>
            <p className="text-gray-500 ">
              Gérez vos informations de profil et vos préférences.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Photo de profil</CardTitle>
              <CardDescription>
                Mettez à jour votre photo de profil pour personnaliser votre
                compte.
              </CardDescription>
            </CardHeader>
            <CardContent>
               
              <div className="flex items-center gap-4">
                <div className="flex flex-col gap-2" >
                {selectedImages ? (
                  <div>
                    <img
                      src={selectedImages}
                      style={{
                        width: '110px',
                        height: '110px',
                        backgroundColor: '#f7f7f7',
                        borderRadius: '50%', 
                        objectFit: 'cover', 
                      }}                    
                    />
                  </div>
                ) : (
                    <img
                      src={Profile}
                      style={{
                        width: '30px',
                        height: '30px',
                        backgroundColor: '#f7f7f7',
                        borderRadius: '50%', 
                        objectFit: 'cover', 
                      }}                    
                      alt="Selected Image"
                    />                
                )}

            
                    
                </div>
                <div className="flex flex-col gap-2">
                      <div className="relative mt-3 pt-10 pb-10 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg p-4">
                      <input
                        type="file"
                        multiple
                        accept=".jpg, .png, .gif"
                        onChange={handleImageUpload}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex  items-center justify-center">
                        <AddAPhotoIcon className='text-yellow-500'/>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        <span className="ml-2 text-gray-600">Changer la photo</span>
                      </div>   
                      </div>                   
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>

            <CardHeader>
              <CardTitle>Changer le mot de passe</CardTitle>
              <CardDescription>
                Mettez à jour votre mot de passe pour sécuriser votre compte.
              </CardDescription>
            </CardHeader>
            <form  onSubmit={handleSubmit}>
            <CardContent>

              <div className="mb-5">
                <Inpute 
                        placeholder="Mot de passe actuel" 
                        type="password" 
                        name="currentPassword"
                        value={FormData.currentPassword}
                        onChange={handleChange}
                />
              </div>

              <div className="mb-5">
                 <Inpute 
                        placeholder="New Mot de passe " 
                        type="password" 
                        name="newPassword"
                        value={FormData.newPassword}
                        onChange={handleChange}
                 />
              </div>

              <div className="mb-5">
                 <Inpute 
                        placeholder="Confirmer le mot de passe" 
                        type="password" 
                        name="vefifiedPassword"
                        value={FormData.vefifiedPassword}
                        onChange={handleChange}
                  />
              </div>

            </CardContent>
            <CardFooter>
              <Button buttonName="Changer le mot de passe" type="submit"/>
            </CardFooter>
            </form>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notifications par e-mail</CardTitle>
              <CardDescription>
                Choisissez ce que vous voulez être notifié par e-mail.
              </CardDescription>
            </CardHeader>
            <CardContent>
            <div className="flex items-center justify-between">
              <div>
              <h1>Nouvelles mentions</h1>
                <CardDescription >Recevez une notification lorsque quelqu'un vous mentionne.</CardDescription>
              </div>
              <FormControlLabel
                control={<SwitchOnOf sx={{ m: 1 }} defaultChecked />} 
              />
            </div>

            <div className="flex items-center mt-5 justify-between">
              <div>
                <h1>Nouveaux commentaires</h1>
                <CardDescription>Recevez une notification lorsque quelqu'un commente vos publications.</CardDescription>
              </div>
              <FormControlLabel
                control={<SwitchOnOf sx={{ m: 1 }} defaultChecked />} 
              />
            </div>
  
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Partager le profil</CardTitle>
              <CardDescription>
                Partagez votre profil avec d'autres en utilisant ce lien.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <div className="">
                  <Inpute  readOnly placeholder="https://example.com/profile/johndoe" type="text" />
                </div>
                <ContentCopyIcon className="transition duration-200 hover:text-yellow-600 text-yellow-500"style={{fontSize:30 }}/>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

const Card = ({ children }) => (
  <div className="card bg-white border rounded-lg ">{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="card-header p-4 border-b border-gray-200">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="card-title text-lg font-bold">{children}</h2>
);

const CardDescription = ({ children }) => (
  <p className="card-description text-sm text-gray-500">{children}</p>
);

const CardContent = ({ children }) => (
  <div className="card-content p-4">{children}</div>
);

const CardFooter = ({ children }) => (
  <div className="card-footer p-4 border-t border-gray-200 dark:border-gray-700">
    {children}
  </div>
);

const InputField = ({ label, type, id }) => (
  <div className="grid gap-2">
    <Label htmlFor={id}>{label}</Label>
    <Input id={id} type={type} />
  </div>
);

const SwitchField = ({ label, description, id }) => (
  <div className="flex items-center justify-between">
    <div className="space-y-1">
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
    </div>
    <Switch id={id} />
  </div>
);

const Avatar = ({ src, fallback }) => (
  <div className="avatar h-20 w-20">
    <div className="rounded-full">
      {src ? (
        <img src={src} alt={fallback} />
      ) : (
        <span className="fallback">{fallback}</span>
      )}
    </div>
  </div>
);



const Label = ({ children, htmlFor }) => (
  <label className="label" htmlFor={htmlFor}>
    {children}
  </label>
);

const Input = ({ id, type, readOnly, value }) => (
  <input
    className="input input-bordered"
    id={id}
    type={type}
    readOnly={readOnly}
    value={value}
  />
);

const Switch = ({ id }) => <input type="checkbox" className="toggle" id={id} />;

export default Account;
