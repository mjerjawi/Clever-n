import { useForm } from "@mantine/hooks";
import { useSignUpEmailPassword } from "@nhost/nextjs";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Container,
  Button,
  Divider,
  Checkbox,
  Anchor,
} from "@mantine/core";
import { useRouter } from "next/router";

const SignUp = (props) => {
  const form = useForm({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      terms: true,
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });

  const router = useRouter();

  const {
    signUpEmailPassword,
    isLoading,
    isSuccess,
    needsEmailVerification,
    isError,
    error,
  } = useSignUpEmailPassword();

  const handleOnSubmit = async (values) => {
    await signUpEmailPassword(values.email, values.password, {
      displayName: `${values.firstName} ${values.lastName}`.trim(),
      metadata: {
        firstname: values.firstName,
        lastname: values.lastName,
      },
    });
  };

  if (isSuccess) {
    router.push("/");
    return null;
  }
  return (
    <Container size="xs" px="xs">
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Welcome to Clever, Create an account
        </Text>

        <Group grow mb="md" mt="md">
          {/* <GoogleButton radius="xl">Google</GoogleButton>
        <TwitterButton radius="xl">Twitter</TwitterButton> */}
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form onSubmit={form.onSubmit((values) => handleOnSubmit(values))}>
          <Group direction="column" grow>
            <TextInput
              label="First Name"
              placeholder="Your first name"
              value={form.values.firstName}
              onChange={(event) =>
                form.setFieldValue("firstName", event.currentTarget.value)
              }
            />
            <TextInput
              label="Last Name"
              placeholder="Your Last name"
              value={form.values.lastName}
              onChange={(event) =>
                form.setFieldValue("lastName", event.currentTarget.value)
              }
            />

            <TextInput
              required
              label="Email"
              placeholder="Your email adress"
              value={form.values.email}
              onChange={(event) =>
                form.setFieldValue("email", event.currentTarget.value)
              }
              error={form.errors.email && "Invalid email"}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) =>
                form.setFieldValue("password", event.currentTarget.value)
              }
              error={
                form.errors.password &&
                "Password should include at least 6 characters"
              }
            />

            <Checkbox
              label="I accept terms and conditions"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
              error={form.errors.terms && "You must accept terms"}
            />
          </Group>

          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="gray" size="xs">
              Already have an account? Login
            </Anchor>
            <Button type="submit">Register</Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
