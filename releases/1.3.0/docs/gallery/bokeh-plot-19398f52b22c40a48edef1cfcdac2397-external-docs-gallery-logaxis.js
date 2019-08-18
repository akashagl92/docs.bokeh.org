(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("93ac905c-22da-4ec5-836c-14bb7141f3fe");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '93ac905c-22da-4ec5-836c-14bb7141f3fe' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.3.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.3.0.min.js"];
      var css_urls = [];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"e8d5bc86-bf36-4f3a-8416-23aa6806ea0f":{"roots":{"references":[{"attributes":{"label":{"value":"y=x^x"},"renderers":[{"id":"6470","type":"GlyphRenderer"}]},"id":"6490","type":"LegendItem"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"6381","type":"Line"},{"attributes":{"data_source":{"id":"6379","type":"ColumnDataSource"},"glyph":{"id":"6380","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6381","type":"Line"},"selection_glyph":null,"view":{"id":"6383","type":"CDSView"}},"id":"6382","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"LCYBeWhf8D9t1i8qO//wP0cTpv7j9fE/rQsrfWBR8z+uLW6pMyb1PxAV0z1skfc/Xf0/raS7+j/j7M35a93+P9VqECbhIgJAg+5zo9ixBUD0l0lbTWoKQLqsX4VwXhBAyQQQnkOmFEDJq9lU2oMaQGs1e4XiUyFA3ffaHV0NJ0DmlgEnUzcvQMDKSKRvgzVAzxsddeIuPkBVAJdFQ41FQIZLSQ7eU09AJMw0PwItV0DLpkPzoHNhQCYX8C2gwGpA1f00BxzfdEA6QULqDpOAQE9nIL5uy4pAH0QiuqsLlkC5ZIWBY3aiQODHjn3kea9AA8H+np5Pu0D/R9LO4B7IQPNcN7EGr9VAVTgXdGbX40An53FE7HryQESuenYdhQFB3w8eRhXoEEEvkqcINJsgQZBej+xTmjBB+A9S7WjlQEFxLdi+f4BRQcyAZ40bdGJBiNLQgv7Nc0GG5NIMd6KFQResykZeDphBFDPF8g06q0GC1Z8Cu12/QTWqxzruY9JB9UGvvFDz5UHoYuaWBKv6QXsV2bNEfRBCj2OiOHvBJELDE5k42Jc6QkHlX14yV1FCsZr8zNIEZ0LiEoFiRBp/QiOKhYdhY5VCB0xKVRLxrUJ53YDUIFXFQpV1o1ze8N5CC8gD0OzW9kL/aresJykRQ6a439qyPypDOmWWHwhvREMvJ7zx8jBgQx2VXDMjHnpDa5Bp/QdxlUOg1BVZzuqxQ0zX5IXHes5DWFGXWWxj6kMa3VjRMUEHRAXZhPEB3CRElk0ZQpkLQ0Ss1PoJJrNhRDsjC79NvoBEvzqdSiofoEQP8Atp75m/RE/Jvd6Jht9EMf211IwBAEWRAigsKosgRQ==","dtype":"float64","shape":[80]}},"selected":{"id":"6538","type":"Selection"},"selection_policy":{"id":"6537","type":"UnionRenderers"}},"id":"6491","type":"ColumnDataSource"},{"attributes":{"line_color":"coral","line_dash":[2,4,6,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6492","type":"Line"},{"attributes":{"source":{"id":"6379","type":"ColumnDataSource"}},"id":"6383","type":"CDSView"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6394","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"fBSuR+F6hD+D6EuI2+GaPyWjRWaks6k/40glHG7ztD8SYBqdSgW/P5ILAduzh8U/Cjdus+KIzD84WerrGEPSP+Q+GqTQv9Y/h8xGgpi62z8RAThDuJngP9rvSlgsleM/oDJcgKjP5j9hyWu7LEnqPx60eQm5Ae4/bflCtab88D/GQkjv9BfzPyC2zDLHUvU/eFPQfx2t9z/LGlPW9yb6Px8MVTZWwPw/bifWnzh5/z9fNmuJzygBQATuqsfEpAJAqjqqCnwwBEBNHGlS9csFQPGS554wdwdAk54l8C0yCUA0PyNG7fwKQNR04KBu1wxAdD9dALLBDkCIz0yy210QQNbJyma/YhFApo6oHYRvEkDzHebWKYQTQL93g5KwoBRADZyAUBjFFUDZit0QYfEWQCREmtOKJRhA7se2mJVhGUA6FjNggaUaQAMvDypO8RtATBJL9vtEHUAUwObEiqAeQC8c8Ur9ASBAk72etKW3IEA2RHyfPnEhQBmwiQvILiJAPgHH+EHwIkCgNzRnrLUjQENT0VYHfyRAJlSex1JMJUBIOpu5jh0mQKkFyCy78iZAS7YkIdjLJ0AtTLGW5agoQE7HbY3jiSlAridaBdJuKkBPbXb+sFcrQDCYwniARCxAUKg+dEA1LUCvnerw8CkuQE94xu6RIi9AFxzptpEPMECn7ga30o8wQNWzvPcLEjFApWsKeT2WMUATFvA6ZxwyQCOzbT2JpDJA00KDgKMuM0AgxTAEtrozQA86dsjASDRAn6FTzcPYNEDM+8gSv2o1QJtI1piy/jVACIh7X56UNkAWurhmgiw3QMXeja5exjdAEfb6NjNiOEAAAAAAAAA5QA==","dtype":"float64","shape":[80]}},"selected":{"id":"6444","type":"Selection"},"selection_policy":{"id":"6443","type":"UnionRenderers"}},"id":"6408","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4,6,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6493","type":"Line"},{"attributes":{},"id":"6390","type":"UnionRenderers"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"6409","type":"Line"},{"attributes":{"label":{"value":"y=sqrt(x)"},"renderers":[{"id":"6369","type":"GlyphRenderer"}]},"id":"6378","type":"LegendItem"},{"attributes":{"data_source":{"id":"6491","type":"ColumnDataSource"},"glyph":{"id":"6492","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6493","type":"Line"},"selection_glyph":null,"view":{"id":"6495","type":"CDSView"}},"id":"6494","type":"GlyphRenderer"},{"attributes":{},"id":"6391","type":"Selection"},{"attributes":{"source":{"id":"6491","type":"ColumnDataSource"}},"id":"6495","type":"CDSView"},{"attributes":{"label":{"value":"y=x"},"renderers":[{"id":"6382","type":"GlyphRenderer"},{"id":"6396","type":"GlyphRenderer"}]},"id":"6392","type":"LegendItem"},{"attributes":{},"id":"6514","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]}},"selected":{"id":"6424","type":"Selection"},"selection_policy":{"id":"6423","type":"UnionRenderers"}},"id":"6393","type":"ColumnDataSource"},{"attributes":{},"id":"6515","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]}},"selected":{"id":"6407","type":"Selection"},"selection_policy":{"id":"6406","type":"UnionRenderers"}},"id":"6379","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"6410","type":"Line"},{"attributes":{"label":{"value":"y=10^(x^2)"},"renderers":[{"id":"6494","type":"GlyphRenderer"}]},"id":"6516","type":"LegendItem"},{"attributes":{"data_source":{"id":"6408","type":"ColumnDataSource"},"glyph":{"id":"6409","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6410","type":"Line"},"selection_glyph":null,"view":{"id":"6412","type":"CDSView"}},"id":"6411","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"6380","type":"Line"},{"attributes":{},"id":"6537","type":"UnionRenderers"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[6],"x":{"field":"x"},"y":{"field":"y"}},"id":"6368","type":"Line"},{"attributes":{"source":{"id":"6408","type":"ColumnDataSource"}},"id":"6412","type":"CDSView"},{"attributes":{},"id":"6407","type":"Selection"},{"attributes":{"text":"log axis example"},"id":"6333","type":"Title"},{"attributes":{},"id":"6538","type":"Selection"},{"attributes":{},"id":"6423","type":"UnionRenderers"},{"attributes":{"callback":null,"end":5},"id":"6335","type":"Range1d"},{"attributes":{},"id":"6424","type":"Selection"},{"attributes":{"callback":null,"end":10000000000000000000000,"start":0.001},"id":"6337","type":"Range1d"},{"attributes":{"label":{"value":"y=x**2"},"renderers":[{"id":"6411","type":"GlyphRenderer"},{"id":"6429","type":"GlyphRenderer"}]},"id":"6425","type":"LegendItem"},{"attributes":{},"id":"6344","type":"BasicTicker"},{"attributes":{},"id":"6339","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"fBSuR+F6hD+D6EuI2+GaPyWjRWaks6k/40glHG7ztD8SYBqdSgW/P5ILAduzh8U/Cjdus+KIzD84WerrGEPSP+Q+GqTQv9Y/h8xGgpi62z8RAThDuJngP9rvSlgsleM/oDJcgKjP5j9hyWu7LEnqPx60eQm5Ae4/bflCtab88D/GQkjv9BfzPyC2zDLHUvU/eFPQfx2t9z/LGlPW9yb6Px8MVTZWwPw/bifWnzh5/z9fNmuJzygBQATuqsfEpAJAqjqqCnwwBEBNHGlS9csFQPGS554wdwdAk54l8C0yCUA0PyNG7fwKQNR04KBu1wxAdD9dALLBDkCIz0yy210QQNbJyma/YhFApo6oHYRvEkDzHebWKYQTQL93g5KwoBRADZyAUBjFFUDZit0QYfEWQCREmtOKJRhA7se2mJVhGUA6FjNggaUaQAMvDypO8RtATBJL9vtEHUAUwObEiqAeQC8c8Ur9ASBAk72etKW3IEA2RHyfPnEhQBmwiQvILiJAPgHH+EHwIkCgNzRnrLUjQENT0VYHfyRAJlSex1JMJUBIOpu5jh0mQKkFyCy78iZAS7YkIdjLJ0AtTLGW5agoQE7HbY3jiSlAridaBdJuKkBPbXb+sFcrQDCYwniARCxAUKg+dEA1LUCvnerw8CkuQE94xu6RIi9AFxzptpEPMECn7ga30o8wQNWzvPcLEjFApWsKeT2WMUATFvA6ZxwyQCOzbT2JpDJA00KDgKMuM0AgxTAEtrozQA86dsjASDRAn6FTzcPYNEDM+8gSv2o1QJtI1piy/jVACIh7X56UNkAWurhmgiw3QMXeja5exjdAEfb6NjNiOEAAAAAAAAA5QA==","dtype":"float64","shape":[80]}},"selected":{"id":"6465","type":"Selection"},"selection_policy":{"id":"6464","type":"UnionRenderers"}},"id":"6426","type":"ColumnDataSource"},{"attributes":{"background_fill_color":{"value":"#fafafa"},"below":[{"id":"6343","type":"LinearAxis"}],"center":[{"id":"6347","type":"Grid"},{"id":"6352","type":"Grid"},{"id":"6377","type":"Legend"}],"left":[{"id":"6348","type":"LogAxis"}],"renderers":[{"id":"6369","type":"GlyphRenderer"},{"id":"6382","type":"GlyphRenderer"},{"id":"6396","type":"GlyphRenderer"},{"id":"6411","type":"GlyphRenderer"},{"id":"6429","type":"GlyphRenderer"},{"id":"6448","type":"GlyphRenderer"},{"id":"6470","type":"GlyphRenderer"},{"id":"6494","type":"GlyphRenderer"}],"title":{"id":"6333","type":"Title"},"toolbar":{"id":"6359","type":"Toolbar"},"x_range":{"id":"6335","type":"Range1d"},"x_scale":{"id":"6339","type":"LinearScale"},"y_range":{"id":"6337","type":"Range1d"},"y_scale":{"id":"6341","type":"LogScale"}},"id":"6332","subtype":"Figure","type":"Plot"},{"attributes":{"formatter":{"id":"6373","type":"BasicTickFormatter"},"ticker":{"id":"6344","type":"BasicTicker"}},"id":"6343","type":"LinearAxis"},{"attributes":{"dimension":1,"ticker":{"id":"6349","type":"LogTicker"}},"id":"6352","type":"Grid"},{"attributes":{"fill_color":{"value":null},"line_color":{"value":"olivedrab"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6427","type":"Circle"},{"attributes":{},"id":"6341","type":"LogScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6428","type":"Circle"},{"attributes":{"data_source":{"id":"6426","type":"ColumnDataSource"},"glyph":{"id":"6427","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6428","type":"Circle"},"selection_glyph":null,"view":{"id":"6430","type":"CDSView"}},"id":"6429","type":"GlyphRenderer"},{"attributes":{},"id":"6356","type":"SaveTool"},{"attributes":{"ticker":{"id":"6344","type":"BasicTicker"}},"id":"6347","type":"Grid"},{"attributes":{"source":{"id":"6426","type":"ColumnDataSource"}},"id":"6430","type":"CDSView"},{"attributes":{},"id":"6443","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"6375","type":"LogTickFormatter"},"ticker":{"id":"6349","type":"LogTicker"}},"id":"6348","type":"LogAxis"},{"attributes":{},"id":"6444","type":"Selection"},{"attributes":{"num_minor_ticks":10},"id":"6349","type":"LogTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"BCb8+I4k9D+vDIQnMjz3PxNYuaxdzfo/DL9U6rnq/j9W2+hD5tQBQGFReoK0kQRAQH1GShm6B0DZplTzmF4LQB113PhAkg9AWrCX0IU1EkAEDx55KQEVQJmo+aWqOhhAEu8RL+fyG0DC/3fmqR4gQDb7U+4wmCJAiHGhYfpyJUC4ZFWr9L0oQPGoLghZiixArGW5zgJ2MEASrCKy8vwyQNTOkwQ05zVAZrdQGQZEOUAWryqB/yQ9QOT6sgQ1z0BAw3wVbdZjQ0A7UMlv411GQAvUyf7tzElAwFOx+OvCTUCHOw6NSipRQG1UkK3nzFNAWErS9xXXVkDoEje8u1haQDXQjCswZF5ABZ+9ok2HYUBOjpVAMjhkQKGGejnZUmdAhxJhBX/nakBeRqQ23ghvQOi+IrhI5nFA80gZM8KldEARqlAbO9F3QKU0JuNHeXtAyY0EmQixf0CDtzp4RkeCQC3kW9OjFYVAbOQ1z0lSiEDxqUe1Jg6MQIsD+hphLpBANuTQx1GqkkBO1Euy44eVQJQV9tMT1phAuz9ANCymnEBn2IgrD4agQL4ZuMZ1D6NA8/LupI78pUA7luj2p1ypQMUkJXNpQa1Agt0/V5jfsED5gQrRvXazQGV108Wxc7ZA8dKZVRXmuUBz25Dh79+9QCrsjKwGO8FAqzxwgDXgw0BKsoh2Wu3GQK7pfV9rcspA9I+YTdGBzkCQxVtwZJjRQDzqbK3oS9RAHeEfYZZp10AweqzXuQHbQB4LzOUfJ99Adlg9H7z34UDIRbRw47nkQDv+tHlz6OdAG9ul1hCU60BTe0A77s/vQGFGlW4YWfJAzPSFJDIq9UAAAAAAAGr4QA==","dtype":"float64","shape":[80]}},"selected":{"id":"6489","type":"Selection"},"selection_policy":{"id":"6488","type":"UnionRenderers"}},"id":"6445","type":"ColumnDataSource"},{"attributes":{"line_color":"gold","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6446","type":"Line"},{"attributes":{"line_color":"tomato","line_dash":[6],"x":{"field":"x"},"y":{"field":"y"}},"id":"6367","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6447","type":"Line"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"D0lIYhM91D/dHwez8sLZP0UE0U8zS94/BVs/JpQd4T9VZf/tSeHiPwr3WsE/fuQ/ptexjv785T+HIwF2UmPnP2O5riNiteg/Wb6UeEX26T9GD6JNXSjrPzEMILeJTew/4aLKMk1n7T+BbIxd5HbuP4wOj3RWfe8/8t3lkcA98D9UVtmVELnwP5TW32vsMPE/Zv+4dJql8T+v4rsyWBfyP5DSR8dbhvI/CDqRIdXy8j+OUL7x7lzzPxxOG27PxPM/1N+R9Jgq9D80JgCQao70PwtiM2dg8PQ/2pzxGZRQ9T/hfn4PHa/1P0GTSLkQDPY/8L7by4Jn9j9xQMdvhcH2P+pa0GspGvc/lX+ISX5x9z/ewCl1ksf3P602c1lzHPg/ZjgeeC1w+D/qDGt/zML4P1Z/Ll1bFPk/JZO4T+Rk+T90h970cLT5P1/SZlcKA/o/rTsM+7hQ+j9IXEXnhJ36Pyg497B16fo/Ays0g5I0+z8gxCMn4n77P1xKLAtryPs/Q1dzSTMR/D+LLMitQFn8PzoFCLuYoPw/D5oKsEDn/D//UCOMPS39P3AOQhOUcv0/AlK90Ui3/T/9KM4fYPv9P0uGxSTePv4/krYB2saB/j8G6akNHsT+P4wfNWXnBf8/TEfBXyZH/z/Kuj5Y3of/Pwr+c4cSyP8/55DuAuMDAECS8bTmfSMAQECnjl3bQgBAPbRIyPxhAEBpkLB644AAQL9OPbyQnwBAQd2tyAW+AEDuN53QQ9wAQKJTDfpL+gBATXTpYB8YAUARkoAXvzUBQLxi+CYsUwFAHJC5j2dwAUBMmNVJco0BQILKZkVNqgFAkcnqavnGAUCo9Jebd+MBQA==","dtype":"float64","shape":[80]}},"selected":{"id":"6391","type":"Selection"},"selection_policy":{"id":"6390","type":"UnionRenderers"}},"id":"6366","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"6366","type":"ColumnDataSource"},"glyph":{"id":"6367","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6368","type":"Line"},"selection_glyph":null,"view":{"id":"6370","type":"CDSView"}},"id":"6369","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"6445","type":"ColumnDataSource"},"glyph":{"id":"6446","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6447","type":"Line"},"selection_glyph":null,"view":{"id":"6449","type":"CDSView"}},"id":"6448","type":"GlyphRenderer"},{"attributes":{},"id":"6353","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"6395","type":"Circle"},{"attributes":{},"id":"6354","type":"WheelZoomTool"},{"attributes":{"source":{"id":"6445","type":"ColumnDataSource"}},"id":"6449","type":"CDSView"},{"attributes":{"data_source":{"id":"6393","type":"ColumnDataSource"},"glyph":{"id":"6394","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6395","type":"Circle"},"selection_glyph":null,"view":{"id":"6397","type":"CDSView"}},"id":"6396","type":"GlyphRenderer"},{"attributes":{},"id":"6464","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"6376","type":"BoxAnnotation"}},"id":"6355","type":"BoxZoomTool"},{"attributes":{"source":{"id":"6393","type":"ColumnDataSource"}},"id":"6397","type":"CDSView"},{"attributes":{},"id":"6465","type":"Selection"},{"attributes":{},"id":"6357","type":"ResetTool"},{"attributes":{},"id":"6406","type":"UnionRenderers"},{"attributes":{"label":{"value":"y=10^x"},"renderers":[{"id":"6448","type":"GlyphRenderer"}]},"id":"6466","type":"LegendItem"},{"attributes":{"ticker":null},"id":"6375","type":"LogTickFormatter"},{"attributes":{"source":{"id":"6366","type":"ColumnDataSource"}},"id":"6370","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZuT/hj6bdPr3EP/ZSgO6wrcw/BQutfxFP0j+P7BmISkfWPxrOhpCDP9o/pK/zmLw33j+XSLDQ+hfhP1y55lQXFOM/ISod2TMQ5T/mmlNdUAznP6sLiuFsCOk/cHzAZYkE6z817fbppQDtP/pdLW7C/O4/YOcxeW988D/CH027fXrxPyVYaP2LePI/iJCDP5p28z/qyJ6BqHT0P00BusO2cvU/rznVBcVw9j8ScvBH0273P3SqC4rhbPg/1+ImzO9q+T85G0IO/mj6P5xTXVAMZ/s//ot4khpl/D9hxJPUKGP9P8P8rhY3Yf4/JjXKWEVf/z/EtnLNqS4AQPVSgO6wrQBAJ++ND7gsAUBYi5swv6sBQIknqVHGKgJAu8O2cs2pAkDsX8ST1CgDQB380bTbpwNATpjf1eImBECANO326aUEQLHQ+hfxJAVA4mwIOfijBUATCRZa/yIGQEWlI3sGogZAdkExnA0hB0Cn3T69FKAHQNh5TN4bHwhAChZa/yKeCEA7smcgKh0JQGxOdUExnAlAnuqCYjgbCkDPhpCDP5oKQAAjnqRGGQtAMb+rxU2YC0BjW7nmVBcMQJT3xgdclgxAxZPUKGMVDUD2L+JJapQNQCjM72pxEw5AWWj9i3iSDkCKBAutfxEPQLugGM6GkA9Adh6T98YHEECP7BmISkcQQKe6oBjOhhBAwIgnqVHGEEDYVq451QURQPEkNcpYRRFACvO7WtyEEUAiwULrX8QRQDuPyXvjAxJAVF1QDGdDEkBsK9ec6oISQIX5XS1uwhJAncfkvfEBE0C2lWtOdUETQM9j8t74gBNA5zF5b3zAE0AAAAAAAAAUQA==","dtype":"float64","shape":[80]},"y":{"__ndarray__":"NMTNCyNr6T8GmLMe5dPnP5L7l1Em4+Y/pml1Gaxe5j/YRuwllCnmP/bhg8rHM+Y/Nr7+/t5z5j8bLkfmYOTmP03GR7pfguc/1VryarZM6D8JvlW+mUPpP6nR0UZYaOo/tDyXlTa96z+9AUSrXUXtP41tWRLWBO8/4l4fPEaA8D8D4T3/Lp/xP31mZKyV4vI/hfffLXlO9D8yKWsCd+f1Pw5B0qjesvc/ibfKvsi2+T9e/mw8Mvr7P7fpWVMchf4/EtjRy1iwAEDkBT+duEsCQPDVYqKwGgRAiVJtdSQkBkA/q7Ai+m8IQPXSV3pBBwtAHR5MvGH0DUD0JXJVp6EQQHapzR/jgBJAIUntOcyfFECtji1ofQcXQAMjxuB0whlAVNZyBM3cHEC/HyRDPzIgQJ9H19DWNCJAqmeDI4J/JED0ejK/DR0nQMyRRFP7GSpAwyrp18mELUC157IAJbcwQJCNGZsA9TJA6hH8zE6HNUCe2JYbP3s4QNZno28p4DtAmu7xAOzHP0ATHvngrCNCQGteTSNeu0RAvfLOVza5R0AtSJrlwy1LQL+zjzJhLE9A6HmG69jlUUA4OdAvG5NUQAs3NGR9rVdAPQz0UzJHW0Dm0yJ4k3VfQDZEdJPYKGJADmxooH78ZECL3oisCkdoQPFVuiXZHGxAZXgiFvFKcEAlTisQMedyQGN58N7Q83VAFccX6XGEeUA5kpHiP7B9QFFNtWZMSYFAv+tvceolhEBIEAZLGoGHQNzXqQ1+cYtA0ZsuVvEIkEA1KCO6BMGSQHgfNT7M85VAD2l72Jy3mUDb4f/Y+CaeQFabPWausKFA2Ck6PRrGpEAAAAAAAGqoQA==","dtype":"float64","shape":[80]}},"selected":{"id":"6515","type":"Selection"},"selection_policy":{"id":"6514","type":"UnionRenderers"}},"id":"6467","type":"ColumnDataSource"},{"attributes":{"line_color":"indigo","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6468","type":"Line"},{"attributes":{},"id":"6373","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_dash":[2,4],"line_width":2,"x":{"field":"x"},"y":{"field":"y"}},"id":"6469","type":"Line"},{"attributes":{"data_source":{"id":"6467","type":"ColumnDataSource"},"glyph":{"id":"6468","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6469","type":"Line"},"selection_glyph":null,"view":{"id":"6471","type":"CDSView"}},"id":"6470","type":"GlyphRenderer"},{"attributes":{},"id":"6358","type":"HelpTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6353","type":"PanTool"},{"id":"6354","type":"WheelZoomTool"},{"id":"6355","type":"BoxZoomTool"},{"id":"6356","type":"SaveTool"},{"id":"6357","type":"ResetTool"},{"id":"6358","type":"HelpTool"}]},"id":"6359","type":"Toolbar"},{"attributes":{"source":{"id":"6467","type":"ColumnDataSource"}},"id":"6471","type":"CDSView"},{"attributes":{},"id":"6488","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6376","type":"BoxAnnotation"},{"attributes":{},"id":"6489","type":"Selection"},{"attributes":{"items":[{"id":"6378","type":"LegendItem"},{"id":"6392","type":"LegendItem"},{"id":"6425","type":"LegendItem"},{"id":"6466","type":"LegendItem"},{"id":"6490","type":"LegendItem"},{"id":"6516","type":"LegendItem"}],"location":"top_left"},"id":"6377","type":"Legend"}],"root_ids":["6332"]},"title":"Bokeh Application","version":"1.3.0"}}';
                  var render_items = [{"docid":"e8d5bc86-bf36-4f3a-8416-23aa6806ea0f","roots":{"6332":"93ac905c-22da-4ec5-836c-14bb7141f3fe"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {} // ensure no trailing comma for IE
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();