"use client";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Link,
  CircularProgress,
} from "@nextui-org/react";

import * as React from "react";
import {
  BadgeAlert,
  ChevronRight,
  LockIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message, {
          style: { background: "#ff571a", color: "white", border: "none" },
          duration: 5000,
          icon: <BadgeAlert />,
        });
        setIsLoading(false);
      } else {
        toast.success(" Hello! 👋 Selamat Datang", {
          duration: 5000,
          position: "top-right",
        });
        router.push("/dashboard");
      }
    } catch (error) {
      // Handle any other errors that may occur
      toast.error("server error");
      // You can display an error message to the user or take some other action
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 8000);
    }
  };

  return (
    <>
      <Button
        className="group"
        onPress={onOpen}
        color="default"
        endContent={<ChevronRight className="group-hover:translate-x-2" />}
      >
        Akses DashBoard
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-black to-stone-900/10 backdrop-opacity-20",
        }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              endContent={
                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="flex py-2 px-1 justify-between">
              <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onPress={handleSignIn} disabled={isLoading}>
              {isLoading ? (
                <CircularProgress color="success" aria-label="Loading..." />
              ) : (
                "Login"
              )}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

//

export const LoginDashBoardForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoadings, setIsLoadings] = React.useState(false);
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const SignInWithOauth = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `http://localhost:3000/auth/callback`,
      },
    });
  };

  const handleSignIn = async () => {
    try {
      setIsLoadings(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast.error(error.message, {
          style: { background: "#ff571a", color: "white", border: "none" },
          duration: 5000,
          icon: <BadgeAlert />,
        });
        setIsLoadings(false);
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      // Handle any other errors that may occur
      toast.error("server error");
      // You can display an error message to the user or take some other action
    } finally {
      setTimeout(() => {
        setIsLoadings(false);
      }, 8000);
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        suppressHydrationWarning
        color="default"
        isIconOnly
        variant="bordered"
      >
        <UserIcon />
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom-center"
        backdrop="opaque"
        classNames={{
          backdrop:
            "bg-gradient-to-t from-black to-stone-900/10 backdrop-opacity-20",
        }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          },
        }}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
          <ModalBody>
            <Input
              autoFocus
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Input
              endContent={
                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
              label="Password"
              placeholder="Enter your password"
              type="password"
              variant="bordered"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="flex  px-1 justify-between">
              <Link color="primary" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
          </ModalBody>
          <ModalFooter className="flex flex-col">
            <Button type="submit" onPress={handleSignIn} disabled={isLoadings}>
              {isLoadings ? (
                <CircularProgress color="success" aria-label="Loading..." />
              ) : (
                "Login"
              )}
            </Button>
            <p>Atau Masuk Dengan</p>
            <Button type="submit" onPress={SignInWithOauth}>
              Google
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default { LoginForm, LoginDashBoardForm };
