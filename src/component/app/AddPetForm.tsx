import { useFormik } from 'formik';
import TextInput from '@appComponents/inputs/TextInputFormik';
import Dropdown from '@appComponents/inputs/DropdownInputFormik';
import customAxios from '@appConfig/customAxios';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { showNotificationWithDuration } from '@appStore/NotificationReducer';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const AddPetForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      race: '',
      birthDate: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(t('petAddition:nameRequired')),
      race: Yup.string().required(t('petAddition:speciesRequired')),
      birthDate: Yup.string().required(t('petAddition:birthDateRequired'))
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await customAxios.post('/pet', values);
        navigate('/app/dashboard');
      } catch (error) {
        showNotificationWithDuration({
          headerText: t('notifications:petRegistration'),
          notificationKind: 'danger',
          duration: 3000
        })(dispatch);
      } finally {
        setLoading(false);
      }
    }
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        maxWidth: 500,
        margin: 'auto'
      }}
    >
      <TextInput
        id="name"
        label={t('petAddition:name')}
        formikProps={formik.getFieldProps('name')}
        error={formik.touched.name ? formik.errors.name : undefined}
      />
      <Dropdown
        id="race"
        label={t('petAddition:species')}
        formikProps={formik.getFieldProps('race')}
        options={[
          {
            label: '',
            id: 'empty'
          },
          {
            label: t('petAddition:dog'),
            id: 'dog'
          },
          {
            label: t('petAddition:cat'),
            id: 'cat'
          }
        ]}
        error={formik.touched.race ? formik.errors.race : undefined}
      />
      <TextInput
        id="birthDate"
        label={t('petAddition:birthDate')}
        formikProps={formik.getFieldProps('birthDate')}
        type="date"
        error={formik.touched.birthDate ? formik.errors.birthDate : undefined}
      />
      <button type="submit" className="btn btn-primary btn-block">
        {loading ? <Spinner animation="border" size="sm" /> : t('petAddition:add')}
      </button>
    </form>
  );
};

export default AddPetForm;
