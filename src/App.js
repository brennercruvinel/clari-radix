import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@radix-ui/react-dialog';
import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

function App() {
  return (
    <div className="App">
      <Dialog>
        <DialogTrigger asChild>
          <button>Open Dialog</button>
        </DialogTrigger>
        <DialogContent>
          <p>This is a Radix Dialog!</p>
          <DialogClose asChild>
            <button>Close</button>
          </DialogClose>
        </DialogContent>
      </Dialog>

      <Tooltip>
        <TooltipTrigger asChild>
          <button>Hover me</button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a Radix Tooltip!</p>
        </TooltipContent>
      </Tooltip>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>
            <p>This is the content for item 1.</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>
            <p>This is the content for item 2.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default App;
