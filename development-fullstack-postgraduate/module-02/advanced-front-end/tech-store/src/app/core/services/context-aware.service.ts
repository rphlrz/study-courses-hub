// Serviço para adaptação contextual da UI
@Injectable({ providedIn: 'root' })
export class ContextAwareService {
  private readonly environment$ = combineLatest([
    this.deviceType$,
    this.networkStatus$,
    this.userPreferences$
  ]).pipe(
    map(([device, network, prefs]) => ({
      renderStrategy: this.getRenderStrategy(device, network),
      dataFetching: this.getDataFetchingPolicy(network),
      uiMode: prefs.darkMode ? 'dark' : 'light'
    }))
  );

  private getRenderStrategy(device: DeviceType, network: NetworkStatus) {
    if (network === 'slow') return 'skeleton';
    if (device === 'mobile') return 'virtual-scroll';
    return 'standard';
  }
} 