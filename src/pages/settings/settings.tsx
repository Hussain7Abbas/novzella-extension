import React from 'react';
import { Button, TextInput, Container, Group, Select } from '@mantine/core';
import { useForm } from '@mantine/form';

export function SettingsPage() {
  const form = useForm({
    initialValues: {
      name: '',
      role: '',
      info: '',
      image: '',
      search: '',
      repName: '',
      repWith: '',
    },
  });

  return (
    <Container w={370} p="md" dir="rtl">
      <TextInput label="الاسم" {...form.getInputProps('name')} />
      <Select
        label="الدور"
        data={['بطل', 'صديق', 'عدو', 'انثى', 'مهارة', 'مدرب', 'طائفة']}
        {...form.getInputProps('role')}
      />

      <Group mt="md" grow>
        <Button color="green.7">اضافة شخصية</Button>
        <Button color="red.7">حذف شخصية</Button>
      </Group>
    </Container>
  );
}
