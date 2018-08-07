//@Component({
    selector: 'my-estimate-detail',
    templateUrl: './app/components/estimateDetail/estimate-detail.component.html'
})

export class EstimateDetailComponent implements OnInit {
    @Input() estimate: Estimate;
    @Input() item: Item;  
    @Input() contact: Contact[];
    title="Estimate Details";
    counterValue = 1;
    selectedContact:string;
    Items:Item[];
    newEstimate = false;
    startDate:any;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private estimateService: EstimateService,
        private itemService:ItemService,
        private route: ActivatedRoute) {
            this.startDate = new Date();
    }

    ngOnInit() {
        this.getItems();
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newEstimate = true;
                this.estimate = new Estimate();
            } else {
                this.newEstimate = false;
                this.estimateService.getEstimate(id)
                    .then(estimate => this.estimate = estimate);
            }
        });
    }
