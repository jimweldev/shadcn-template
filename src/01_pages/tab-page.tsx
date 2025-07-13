import { useState } from 'react';
import { FaHouse } from 'react-icons/fa6';
import { Card, CardBody } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const TabPage = () => {
  const [size, setSize] = useState<'default' | 'sm' | 'lg'>('default');

  return (
    <div className="space-y-layout">
      <div className="flex justify-end">
        <Select
          value={size}
          onValueChange={value => setSize(value as 'default' | 'sm' | 'lg')}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="gap-layout grid grid-cols-4">
        <Card>
          <CardBody>
            <Tabs defaultValue="account">
              <TabsList size={size}>
                <TabsTrigger value="account">
                  <FaHouse />
                  Account
                </TabsTrigger>
                <TabsTrigger value="password">
                  <FaHouse />
                  Password
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </CardBody>
        </Card>

        <Tabs defaultValue="account">
          <Card>
            <TabsList size={size} variant="outline">
              <TabsTrigger value="account">
                <FaHouse />
                Account
              </TabsTrigger>
              <TabsTrigger value="password">
                <FaHouse />
                Password
              </TabsTrigger>
            </TabsList>
            <CardBody>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </CardBody>
          </Card>
        </Tabs>

        <Card>
          <CardBody>
            <Tabs defaultValue="account">
              <TabsList size={size} variant="pills">
                <TabsTrigger value="account">
                  <FaHouse />
                  Account
                </TabsTrigger>
                <TabsTrigger value="password">
                  <FaHouse />
                  Password
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </Tabs>
          </CardBody>
        </Card>

        <Tabs defaultValue="account">
          <Card>
            <TabsList size={size} variant="underline">
              <TabsTrigger value="account">
                <FaHouse />
                Account
              </TabsTrigger>
              <TabsTrigger value="password">
                <FaHouse />
                Password
              </TabsTrigger>
            </TabsList>
            <CardBody>
              <TabsContent value="account">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="password">
                Change your password here.
              </TabsContent>
            </CardBody>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default TabPage;
