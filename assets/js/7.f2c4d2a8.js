(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{357:function(e,t,r){e.exports=r.p+"assets/img/channel9-geo-replication-thumbnail.8b56d9f2.png"},371:function(e,t,r){"use strict";r.r(t);var a=r(42),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"azure-container-registry-roadmap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#azure-container-registry-roadmap"}},[e._v("#")]),e._v(" Azure Container Registry Roadmap")]),e._v(" "),a("p",[e._v("The Azure Container Registry ("),a("a",{attrs:{href:"https://aka.ms/acr",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR"),a("OutboundLink")],1),e._v(") is central to image and "),a("a",{attrs:{href:"https://github.com/opencontainers/artifacts",target:"_blank",rel:"noopener noreferrer"}},[e._v("artifact"),a("OutboundLink")],1),e._v(" management within Azure.")]),e._v(" "),a("p",[a("strong",[e._v("ACR provides:")])]),e._v(" "),a("ul",[a("li",[e._v("Network-close registry access, providing the fastest and most reliable storage of images, close to your Azure deployments. For more info: "),a("a",{attrs:{href:"https://stevelasker.blog/2018/11/14/choosing-a-docker-container-registry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Choosing a Docker Container Registry"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/authentication",target:"_blank",rel:"noopener noreferrer"}},[e._v("Integrated security"),a("OutboundLink")],1),e._v(" to your Azure Active Directory accounts, enabling your company to control access to your collection of images")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/geo-replication",target:"_blank",rel:"noopener noreferrer"}},[e._v("Geo-replication"),a("OutboundLink")],1),e._v(", provides single registry/image/tag names, that can be used across multiple regions\n"),a("a",{attrs:{href:"https://channel9.msdn.com/Shows/Azure-Friday/Azure-Container-Registry-Geo-replication",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:r(357),alt:"Channel 9 Geo-replication with Donovan Brown & Steve Lasker"}}),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/vnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("VNet and Firewall Rules"),a("OutboundLink")],1),e._v(", securing registries from public endpoints.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/tasks",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tasks"),a("OutboundLink")],1),e._v(" for building, patching, testing container workloads")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/tasks/scheduling",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scheduled Tasks"),a("OutboundLink")],1),e._v(" for automating tasks, such as automatically purging older artifacts")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webhook Notifications"),a("OutboundLink")],1),e._v(" for event based notifications of content pushed and/or deleted")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/container-registry/container-registry-tutorial-base-image-update",target:"_blank",rel:"noopener noreferrer"}},[e._v("OS & Framework Patching"),a("OutboundLink")],1),e._v(", using "),a("a",{attrs:{href:"https://aka.ms/acr/tasks",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Tasks"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/helm-repos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm Chart"),a("OutboundLink")],1),e._v(" support, as the beginning or "),a("a",{attrs:{href:"https://aka.ms/acr/artifacts",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI Artifact"),a("OutboundLink")],1),e._v(" support.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/quarantine",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quarantine Pattern"),a("OutboundLink")],1),e._v(" ("),a("em",[e._v("private preview")]),e._v("), providing secure by default registries")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/public-repos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Anonymous Pulls"),a("OutboundLink")],1),e._v(" ("),a("em",[e._v("preview")]),e._v("), - aka public registries.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://aka.ms/acr/content-trust",target:"_blank",rel:"noopener noreferrer"}},[e._v("Content Trust"),a("OutboundLink")],1),e._v(" for assuring the delivery of an image from ACR to its destination.")])]),e._v(" "),a("p",[e._v("To provide insight to our backlog, we wanted to provide the high level list of experiences we're enabling. While not a complete list, it should provide some insight to what's coming, what's a bit further out and the thought process behind our prioritization.")]),e._v(" "),a("h2",{attrs:{id:"ordering-of-priority"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ordering-of-priority"}},[e._v("#")]),e._v(" Ordering of Priority")]),e._v(" "),a("p",[e._v("Containers have grown exponentially over the last few years. As a result, the ecosystem continues to grow. There are many great partners doing innovative and required work. Our goals for ACR is to work with, not compete with registry partners. We believe ACR can provide the best base experience in Azure, as ACR can integrate core capabilities required to run in Azure. While partners can build atop the "),a("a",{attrs:{href:"https://github.com/opencontainers/distribution-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI Distribution Spec"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("As a result, we're working with partners to integrate with ACR, providing any necessary features they need to provide their additional capabilities. As an example, "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Hook notifications"),a("OutboundLink")],1),e._v(" allow vulnerability scanning partners to respond to events, rather than scheduled jobs for detecting new/updated images requiring scanning. "),a("a",{attrs:{href:"https://aka.ms/acr/vnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("VNet & Firewall Rules"),a("OutboundLink")],1),e._v(" enables core capabilities of Azure, other registries would be unable to provide.")]),e._v(" "),a("p",[e._v("As we look to our backlog, there's a long list of scenarios we're working to enable. They break down into 5 categories:")]),e._v(" "),a("ol",[a("li",[e._v("Operational Health & Support")]),e._v(" "),a("li",[e._v("Must Haves to enable basic registry access")]),e._v(" "),a("li",[e._v("Must Haves, but possibly with partner integration")]),e._v(" "),a("li",[e._v("Primitives that must be done within the core registry")]),e._v(" "),a("li",[e._v("Innovative/differentiating features that require core registry changes")])]),e._v(" "),a("p",[e._v("As a result, there are a set of features we know customers have come to expect from a registry, such as image vulnerability scanning and we are working to enable those, even if just links into the Azure Marketplace. While there are a set of features that require deeper integration, such as "),a("code",[e._v("az acr login -r [yourregistry]")]),e._v(" enabling your individual Azure Identity to access your your collection of images, "),a("a",{attrs:{href:"https://aka.ms/acr/vnet",target:"_blank",rel:"noopener noreferrer"}},[e._v("VNet & Firewall Rules"),a("OutboundLink")],1),e._v(" or core performance work.")]),e._v(" "),a("h2",{attrs:{id:"backlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backlog"}},[e._v("#")]),e._v(" Backlog")]),e._v(" "),a("p",[e._v("The following items are in our backlog. Some are in active development. The majority of our backlog items source from users, via "),a("a",{attrs:{href:"https://aka.ms/acr/uservoice",target:"_blank",rel:"noopener noreferrer"}},[e._v("uservoice"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#vulnerability-scanning-updates"}},[e._v("Vulnerability Scanning Updates")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#restrict-endpoint-access-vnet-support"}},[e._v("Restrict Endpoint Access /VNet Support")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#when-will-acr-vnet-support-ga"}},[e._v("When will ACR VNet support GA")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#tokens--repository-scoped-permissions-rbac"}},[e._v("Tokens & Repository Scoped Permissions (RBAC)")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#diagnostics--monitoring"}},[e._v("Diagnostics & Monitoring")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#health-checks"}},[e._v("Health Checks")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#auto-purge"}},[e._v("Auto Purge")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#acr-helm-ga"}},[e._v("ACR Helm GA")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#performance--scalability"}},[e._v("Performance & Scalability")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#container-build-caching-with-acr-tasks-and-buildx"}},[e._v("Container Build Caching with ACR Tasks and BuildX")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#helping-with-prioritization"}},[e._v("Helping with Prioritization")])])]),e._v(" "),a("h3",{attrs:{id:"vulnerability-scanning-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vulnerability-scanning-updates"}},[e._v("#")]),e._v(" Vulnerability Scanning Updates")]),e._v(" "),a("p",[e._v("We've heard customers tell us that vulnerability scanning is table stakes for container registries. We agree. With partners like Aqua and TwistLock, customers can get the must-haves complete, today. ACR provides launch points to the Azure Marketplace, helping customers integrate vulnerability scanning.")]),e._v(" "),a("p",[e._v("Starting fall '19, "),a("a",{attrs:{href:"https://azure.microsoft.com/services/security-center",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Center"),a("OutboundLink")],1),e._v(" will start offering registry scanning and runtime protection. As with any new offering, it will take time for us to dial in the experiences.")]),e._v(" "),a("p",[e._v("We believe customers should have a choice for their security scanning solutions and will continue to provide extensibility, just as users can choose the security scanning of their users machines and their servers.")]),e._v(" "),a("h3",{attrs:{id:"restrict-endpoint-access-vnet-support"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restrict-endpoint-access-vnet-support"}},[e._v("#")]),e._v(" Restrict Endpoint Access /VNet Support")]),e._v(" "),a("p",[e._v("Customers have asked for more granular IP restrictions to their registry, in addition to authentication. As a shared registry API, this does present some challenges that we're incrementally addressing.")]),e._v(" "),a("p",[e._v("In "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/blog/azure-container-registry-virtual-network-and-firewall-rules-preview-support/",target:"_blank",rel:"noopener noreferrer"}},[e._v("March of 2019 we added preview support for VNet and Firewall rules through Service Endpoints"),a("OutboundLink")],1),e._v(". This allows customers to restrict their acr endpoint to requests from within the defined Azure VNet, or any allowed ip ranges.")]),e._v(" "),a("p",[e._v("The Service Endpoint approach to VNets puts firewall rules on the public endpoint, which limits the inbound traffic to network packets from reources defined as inside the VNet. However, the traffic does travel across the public network to be ingested.")]),e._v(" "),a("p",[a("strong",[e._v("Private Links")]),e._v(" is the next iteration of VNet & Firewall rules. With private endpoints, customers can assign private IPs to their resources, including ACR. This means that traffic from the VNet is not routed across the public network.")]),e._v(" "),a("p",[e._v("We plan to GA ACR VNet & Firewall rules when we complete the private link enhancements, and we add a new consumption pricing tier.")]),e._v(" "),a("h4",{attrs:{id:"multi-tenant-services-vnets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-tenant-services-vnets"}},[e._v("#")]),e._v(" Multi-tenant Services & VNets")]),e._v(" "),a("p",[e._v("For container hosts that are not within the customers Azure VNet, such as multi-tenant services like Azure ML, ACI, Azure DevOps hosted build agents and ACR Tasks, the host is unable to pull the image. The host can only pull the image if it's in the VNet. We refer to this as the bootstrapping problem.")]),e._v(" "),a("p",[e._v("We are actively working with service teams to identify a secure solution that adherers to the promise that a customers VNet is secured to only the resources they place in that VNet.")]),e._v(" "),a("h4",{attrs:{id:"when-will-acr-vnet-support-ga"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#when-will-acr-vnet-support-ga"}},[e._v("#")]),e._v(" When will ACR VNet support GA")]),e._v(" "),a("p",[e._v("When customers ask for GA support, they are typically asking when we'll be able to support them with their production workloads. ACR will support any customer by opening a support ticket. Although ACR VNet & Firewall rules are not yet GA, we will provide full support by opening a ticket: https://aka.ms/acr/support/create-ticket")]),e._v(" "),a("h3",{attrs:{id:"tokens-repository-scoped-permissions-rbac"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tokens-repository-scoped-permissions-rbac"}},[e._v("#")]),e._v(" Tokens & Repository Scoped Permissions (RBAC)")]),e._v(" "),a("p",[e._v("One of the top requests has been "),a("a",{attrs:{href:"https://feedback.azure.com/forums/903958-azure-container-registry/suggestions/31655977-configure-permissions-at-a-repository-level",target:"_blank",rel:"noopener noreferrer"}},[e._v("UserVoice: Configure permissions at a repository level"),a("OutboundLink")],1),e._v(". We also have frequent requests for token based permissions, as service principals can provide access to other resources in Azure that customers may not be comfortable with. There's also a max number Service Principals and Managed Identities that can be provisioned within a subscription, and customers have faced challenges with "),a("a",{attrs:{href:"https://feedback.azure.com/forums/903958-azure-container-registry/suggestions/36027793-extend-token-lifespan-of-az-acr-login",target:"_blank",rel:"noopener noreferrer"}},[e._v("AAD timeouts"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("As customers use containers, and other "),a("a",{attrs:{href:"https://github.com/opencontainers/artifacts",target:"_blank",rel:"noopener noreferrer"}},[e._v("artifacts"),a("OutboundLink")],1),e._v(", for their IoT deployment, the number of devices can grow to the millions.")]),e._v(" "),a("p",[e._v("To support the scale of IoT, ACR is implementing repository based RBAC, using tokens. This feature is under development, with a hopeful preview in the fall of 2019. In a subsequent release, tokens can be backed by service principals and AAD users, enabling RBAC with SPs, Managed Identities and Users.")]),e._v(" "),a("h3",{attrs:{id:"diagnostics-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diagnostics-monitoring"}},[e._v("#")]),e._v(" Diagnostics & Monitoring")]),e._v(" "),a("p",[e._v("Customers looking to troubleshoot why their push/pull operations are either failing or are too slow wind up contacting Azure Support, just to troubleshoot basic information. In the fall of '19, ACR will be shipping Diagnostics and Logs support.")]),e._v(" "),a("h4",{attrs:{id:"health-checks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#health-checks"}},[e._v("#")]),e._v(" Health Checks")]),e._v(" "),a("p",[e._v("Customers looking to test their connectivity to their ACR can use "),a("a",{attrs:{href:"https://aka.ms/acr/health-check",target:"_blank",rel:"noopener noreferrer"}},[e._v("az acr health-check"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"auto-purge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-purge"}},[e._v("#")]),e._v(" Auto Purge")]),e._v(" "),a("p",[e._v("As registries are filled with automated image builds, they wind up filling with tags, manifests and layers that never get used, or were deployed for a period of time, but no longer. "),a("a",{attrs:{href:"https://github.com/AzureCR/specs/issues/1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Auto-purge-spec"),a("OutboundLink")],1),e._v(" outlines how ACR will track image usage and move unused layers to a recycle bin, allowing subsequent purging. The feature will be configured and managed, with reasonable defaults, assuring you'll never lose anything you really wanted to keep.")]),e._v(" "),a("p",[e._v("As a step along this automated journey, "),a("a",{attrs:{href:"https://aka.ms/acr/tasks/scheduling",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Scheduled Tasks"),a("OutboundLink")],1),e._v(" and a new ACR image (mcr.microsoft.com/acr/acr-cli:0.1) can be used to "),a("a",{attrs:{href:"https://aka.ms/acr/auto-purge",target:"_blank",rel:"noopener noreferrer"}},[e._v("automate image deletion"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"acr-helm-ga"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acr-helm-ga"}},[e._v("#")]),e._v(" ACR Helm GA")]),e._v(" "),a("p",[a("strong",[e._v("Q: When will ACR Helm Support GA?")]),a("br"),e._v("\nWith the collaboration of "),a("a",{attrs:{href:"https://jdolitsky.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Josh Dolitsky"),a("OutboundLink")],1),e._v(", of "),a("a",{attrs:{href:"https://chartmuseum.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chart Museum"),a("OutboundLink")],1),e._v(", we added "),a("a",{attrs:{href:"https://aka.ms/acr/helm-repos",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm 2"),a("OutboundLink")],1),e._v(" support to ACR - "),a("code",[e._v("az acr helm")]),e._v(". As we watched the industry look for "),a("strong",[e._v("Y")]),e._v("et "),a("strong",[e._v("A")]),e._v("nother "),a("strong",[e._v("S")]),e._v("torage "),a("strong",[e._v("S")]),e._v("olution (YASS) for new types like "),a("a",{attrs:{href:"https://archive.sylabs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Singularity"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://cnab.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CNAB"),a("OutboundLink")],1),e._v(" and other new types, we realized we needed a more generalized solution. With help from people like "),a("a",{attrs:{href:"https://www.linkedin.com/in/stephenjday/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Stephen Day"),a("OutboundLink")],1),e._v(" and the "),a("RouterLink",{attrs:{to:"/opencontainers.org/"}},[e._v("OCI community")]),e._v(", we focused on "),a("a",{attrs:{href:"https://stevelasker.blog/2019/01/25/cloud-native-artifact-stores-evolve-from-container-registries/",target:"_blank",rel:"noopener noreferrer"}},[e._v("creating a generalized Artifacts store"),a("OutboundLink")],1),e._v(". In August of '19, the "),a("a",{attrs:{href:"https://github.com/opencontainers/tob/pull/60",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI TOB"),a("OutboundLink")],1),e._v(" adopted "),a("a",{attrs:{href:"https://github.com/opencontainers/artifacts",target:"_blank",rel:"noopener noreferrer"}},[e._v("OCI Artifacts"),a("OutboundLink")],1),e._v(".")],1),e._v(" "),a("p",[e._v("With OCI Artifacts in place, we are working with the "),a("a",{attrs:{href:"https://github.com/helm/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm Community"),a("OutboundLink")],1),e._v(" to add "),a("a",{attrs:{href:"https://v3.helm.sh/docs/topics/registries/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm Registry support"),a("OutboundLink")],1),e._v(", allowing customers to use "),a("code",[e._v("helm registry push|pull|")]),e._v(" across all OCI compliant Registries. As Helm 3 Registry support releases, and the community moves to Helm 3, our plan is to deprecate the Helm 2 acr support for, what we believe is a more native Helm 3 experience. We will continue to support "),a("code",[e._v("az acr helm")]),e._v(" support for a period of transition to Helm 3. All Helm charts pushed to ACR with "),a("code",[e._v("az acr helm")]),e._v(" will be fully compatible with Helm 3 registry support. Customers using ACR Helm should be comfortable with a smooth transition to Helm 3 and continue with "),a("code",[e._v("az acr helm")]),e._v(" in the meantime.")]),e._v(" "),a("h3",{attrs:{id:"performance-scalability"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-scalability"}},[e._v("#")]),e._v(" Performance & Scalability")]),e._v(" "),a("p",[e._v("As customers move from manual deployments to automation, we've seen a dramatic increase in usage. Some customers care using utilities like "),a("a",{attrs:{href:"https://github.com/v2tec/watchtower",target:"_blank",rel:"noopener noreferrer"}},[e._v("Watch Tower"),a("OutboundLink")],1),e._v(" to automate "),a("code",[e._v("docker pull")]),e._v(", keeping your deployments up to date, while others are simply doing massive scaling.")]),e._v(" "),a("p",[e._v("When issuing "),a("code",[e._v("docker pull")]),e._v(" a manifest is returned, listing the layers required. If the local host already has the layers, no additional requests are made. However, the registry must still respond with the manifest. ACR introduced a caching layer to cache & return manifest without having to hit storage. We should mention that an alternative approach would be to use "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-webhook",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web Hooks"),a("OutboundLink")],1),e._v(" to know when an image has been updated, rather than simply asking the registry: "),a("em",[e._v('"do you have anything new, do you have anything new, do you have anything new..."')]),e._v(".\nWe've also been working with a few early adopter customers to scale thousands of nodes, each pulling large images. We recently scaled 1,000 nodes in 10 minutes with 11 terabytes being deployed. This performance work has been moved into the Premium SKU to enable high scale customers a solution to their larger needs. We continue to focus on concurrent throughput and individual pull performance scenarios.")]),e._v(" "),a("h3",{attrs:{id:"container-build-caching-with-acr-tasks-and-buildx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#container-build-caching-with-acr-tasks-and-buildx"}},[e._v("#")]),e._v(" Container Build Caching with ACR Tasks and BuildX")]),e._v(" "),a("p",[e._v("When building locally, "),a("code",[e._v("docker build")]),e._v(" benefits from image caching. This works as the machine is dedicated to the user, along with its disk. As users leverage cloud builds, they want the same build cache performance, without having to pay for dedicated compute, just waiting for builds. ACR released "),a("a",{attrs:{href:"https://github.com/docker/buildx",target:"_blank",rel:"noopener noreferrer"}},[e._v("BuildX"),a("OutboundLink")],1),e._v(" integration with "),a("a",{attrs:{href:"https://aka.ms/acr/buildx",target:"_blank",rel:"noopener noreferrer"}},[e._v("ACR Tasks"),a("OutboundLink")],1),e._v(" as a preview to first class integration. We hope to have something as simple as "),a("code",[e._v("--cache")]),e._v(" as a parameter to tasks, soon.")]),e._v(" "),a("h2",{attrs:{id:"helping-with-prioritization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#helping-with-prioritization"}},[e._v("#")]),e._v(" Helping with Prioritization")]),e._v(" "),a("p",[e._v("Have a request, or wish we were doing something; Please provide your feedback and ranking to help us understand your needs and priority through "),a("a",{attrs:{href:"https://aka.ms/acr/uservoice",target:"_blank",rel:"noopener noreferrer"}},[e._v("UserVoice"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=n.exports}}]);