import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Row, TextInput, Button } from 'react-materialize';
import { GoogleLogin } from 'react-google-login';
import ConstantsList from '@constants/Constants';

// CSS
import stylesGoogle from '@styles/modules/stylesGoogle.module.css';
import { useToasts } from 'react-toast-notifications';