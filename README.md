# Coralogix Engineering Exercise
#### INTRO
Hey folks, welcome to Coralogix. At Coralogix, we are great believers in infrastructure-as-code and automated deployment. We are heavy users of Terraform in production, so the point of this exercise is to see if you can show some basic familiarity with it. This exercise is intended to be simple enough that it should not take a skillful engineer an inordinate amount of time to complete, even if you haven't encountered any of the tools before.

Your mission, should you choose to accept it, involves the deployment of a small setup on virtual servers.

Please read the following instructions **carefully** before starting this assignment - you don't want to miss any important instructions, especially those in [General Guidelines](#general-guidelines).

#### Get your environment ready
You'll need a desktop or laptop computer (you are recommended to use Linux or OS X, but if you get everything to work with Windows, we won't judge you) with the following:

1. Setup an [AWS `free tier` account](https://aws.amazon.com/free/) - you shouldn’t have to pay anything to run this exercise, and we think it would be unethical to ask you to buy anything as part of your job application. If you find yourself needing to spend money, please stop and let us know.
1. Install `awscli`, the AWS command line tool. You can find the instructions in the [AWS documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html).
1. Install Terraform (>= v1.0.0). Hashicorp, which makes Terraform, has an [installation guide](https://learn.hashicorp.com/terraform/getting-started/install).
1. Install nodejs (>= v14.0.0), either from the [official website](https://nodejs.org/en/download/) or from your operating system's package manager.
1. Run the service included in this repository: `nodejs nodejs/webapp.js`.
1. Open your browser, go to <http://localhost:8080>, and you should get some information about Coralogix from the `webapp.js` service you just executed.

**Important note**: all of the above programs and service should work just fine, straight out of the box. There's no hidden part of the exercise in which you need to debug any issues.

If you have any ethical issues with any of the above, let us know, we'll probably be impressed.

#### Ready for action?
Great!
Your project is simple, as a Coralogix Engineer you need to be able to deploy a really simple service to production.
You are requested to do the following:

###### Deployment
Create a Terraform *module* for the `webapp.js` service (if you read the Terrform documentation, you'll understand that Terraform has a specific notion of what the word "module" means). The module should create virtual servers (AWS EC2), install the `webapp.js` service in this repository onto those servers, **run** the service automatically after the server boots up, and load balance the virtual servers with an AWS Elastic Load Balancer. Make sure the module is ready to be used in **production** (see the [General Guidelines](#general-guidelines)).

We understand there might be a short service downtime when re-deploying a service, that’s fine for this exercise. You have finished the exercise when you can show the `webapp.js` service running and available on AWS, like you got it to run on your local machine during the setup.

#### Deliverables
A GitHub pull request, containing:  

1. The code for the above Terraform module.
1. A wrapper script for deploying the Terraform module. You can write this script in Python, Bash, or any other scripting language you feel comfortable with.
1. A README.md file documenting the code you wrote.

Please make sure your pull request contains all the requirments above, and does not contain any generated code or files.

The pull request itself should contain a short description of the work you did, and anything else you’d like us to know as we proceed to examine your work.

#### General Guidelines
* Don't just rush in and get started right away, spend some time to think through the problem and how to design a solution. There are many ways to do this the wrong way, and it would be a shame if the solution you came up with was fundamentally flawed because you didn't take some time to think.
* Think about operational use cases from the real world. For example, can your wrapper script be run multiple times in a row, without any adverse effects (i.e. is your wrapper script idempotent)? Does your deployment support high-availability, and how would it scale with additional load? What happens if one of the services crashes? What happens if one of the virtual servers crashes? What happens if the underlying physical hardware that powers one of the virtual servers crashes?
* While we would consider the following to be essential to running services in production, in the interests of keeping the exercise brief, we consider the following to be **out of scope** and don't expect you to implement any of the following: monitoring, centralized logging, registering a domain and pointing subdomains to the ELB, setting up HTTPS/TLS, setting up user authentication and authorization, setting up backups or other means of disaster recovery, setting up access auditing, or network control policy including but not limited to restrictive security groups, firewalls, ACLs, SIEMs, or fail2ban. By "production ready" our intention is purely within the realm of protecting against outages caused by benign reasons i.e. increased traffic, natural hardware failure, and cloud provider scheduling policy.
* We expect for your deliverable to be *polished*. As this is a weekend-length exercise, we don't intend for you to write a large quantity of code, but we do expect to see high quality code. Evidence of sloppiness - poor documentation, code which doesn't work, etc. - will be judged harshly. The occasional English spelling or grammar mistake is still acceptable, but English that is so poor as to be incomprehensible is unacceptable.
