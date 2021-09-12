import { expect } from 'chai';
import parseCssProperties from './parseCssProperties';

describe('Parse CSS properties', function () {
  it('should parse a simple CSS correctly', function () {
    expect(parseCssProperties({ color: '#fff' }, '.cls')).to.be.deep.equal(
      '.cls{color:#fff;}'
    );
  });
  it('should parse a complex CSS correctly', function () {
    expect(
      parseCssProperties(
        {
          fontSize: '16px',
          height: '50px',
          width: '50px',
          opacity: '0.5',
          display: 'block',

          '&#id': {
            fontSize: '17px',

            '&:hover': {
              fontSize: '18px',
            },
          },
        },
        '.cls'
      )
    ).to.be.deep.equal(
      '.cls{font-size:16px;height:50px;width:50px;opacity:0.5;display:block;}' +
      '.cls#id{font-size:17px;}' +
      '.cls#id:hover{font-size:18px;}'
    );
  });
});
