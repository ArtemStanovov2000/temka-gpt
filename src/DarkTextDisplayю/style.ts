export const stylesDarkTextDisplay = {
  container: {
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    marginBottom: '20px'
  },
  inputRow: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center'
  },
  textField: {
    flex: 1,
    padding: '10px',
    backgroundColor: '#2d2d2d',
    color: '#ffffff',
    border: '1px solid #444',
    borderRadius: '4px',
    fontSize: '16px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold' as const,
    transition: 'all 0.2s ease-in-out',
    transform: 'translateY(0)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
  },
  displayArea: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#2d2d2d',
    borderRadius: '4px',
    borderLeft: '4px solid #4CAF50',
    minHeight: '50px',
  },
  histogramContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#1e1e1e',
    borderRadius: '4px',
    overflowX: 'auto' as const,
    whiteSpace: 'nowrap' as const,
  },
  histogramInner: {
    display: 'flex',
    alignItems: 'flex-end',
    minWidth: 'max-content',
  },
  histogramBarWrapper: {
    display: 'inline-block',
    width: '12px',
    marginRight: '2px',
    position: 'relative' as const,
    cursor: 'default',
  },
  histogramBar: {
    width: '100%',
    backgroundColor: '#4caf50',
    transition: 'height 0.1s ease',
    borderRadius: '2px 2px 0 0',
  },
  histogramGrid: {
    display: 'grid',
    gridTemplateColumns: `repeat(15, 1fr)`, // 15 колонок, можно настроить
    gap: '4px',
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#1e1e1e',
    borderRadius: '4px',
    maxHeight: '400px', // ограничиваем высоту и добавляем прокрутку
    overflowY: 'auto' as const,
  },
  gridCell: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontSize: '10px',
    color: '#ccc',
    textAlign: 'center' as const,
    padding: '2px',
    cursor: 'default',
  },
  barContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: '70px',
    marginBottom: '2px',
  },
  bar: {
    width: '80%',
    backgroundColor: '#4caf50',
    transition: 'height 0.1s ease',
    borderRadius: '2px 2px 0 0',
  },
  tokenLabel: {
    wordBreak: 'break-all' as const,
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
  },
};