# step1: add comment on field,so it will set in suggestion in vscode

please analyse the QueueType Module schema. Now, You can see the comment on every field in schema.graphql
you need to add comments in dto and entity where it is required. So, it will be helpful to developer in vscode as comment will also come in suggestion with field. So, I want comment as documentation in suggetion in vscode. You Also make sure to give in selectionschema

you need to analyse schema.graphql, there is already commets available you need to use that comment for filed... Don't add any random comment

# step:2 if main Dto class has no comment
Now, we need comment on main class dto for ex: QueueTypeRestoreDto. SO, developer can understand about the function used. PLease analyse main class dto and check in schema.graphql and applied comment on main class.
you have reference as below 
src/graphql/endpoints/shared/queue/queue-type/dto.ts
you don't need to add random comment. analyse schema.graphql properly and thourghlu
and add the comment wihich is in schema only.

# step:3 add comment for service file method
Now, analyse schema, there is main class Dto which has comment like
"""
  Start finding records in entity. This is easy, quick and simple way for majority of search operation.
  """
  QueueTypeFind(filter: QueueTypeFindInputDto!): QueueTypeFindOutputDto!

Now, if there is QueueTypeFind, then in service there is find mehtod. Now We want comment for all class in service file. So, it become jsdoc comment in vscode
We need to do same for all class in service file. Do not skip any class.
you can take refrence of 
src/graphql/endpoints/shared/queue/queue-type/service.ts



