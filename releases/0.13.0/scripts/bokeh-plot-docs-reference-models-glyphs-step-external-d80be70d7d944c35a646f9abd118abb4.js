(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("3897acef-7f38-4021-a7f6-553a271b1edb");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3897acef-7f38-4021-a7f6-553a271b1edb' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.13.0.min.js"];
    
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
                    
                  var docs_json = '{"2bbcc152-07a6-4886-9acb-7dcbb7932bb1":{"roots":{"references":[{"attributes":{},"id":"0d5f8af9-6708-470e-86c6-7fe27bab50d9","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"c725aaa8-6596-4b42-bd8f-9d3faac74007","type":"Toolbar"},{"attributes":{},"id":"5f5480c4-7cbd-4204-890a-f8642cedde46","type":"BasicTicker"},{"attributes":{"below":[{"id":"b74d0274-cfd5-486b-9383-aee23aa21f45","type":"LinearAxis"}],"h_symmetry":false,"left":[{"id":"bf857ac6-8e7a-41b8-959c-c6889f970647","type":"LinearAxis"}],"min_border":0,"plot_height":300,"plot_width":300,"renderers":[{"id":"70b93742-6f64-4855-8f52-febfee15337b","type":"GlyphRenderer"},{"id":"c3c815f0-caec-440e-aefe-bed2a4dcbf1d","type":"GlyphRenderer"},{"id":"8a0d9527-e087-4f17-8806-72a9212b14f8","type":"GlyphRenderer"},{"id":"b74d0274-cfd5-486b-9383-aee23aa21f45","type":"LinearAxis"},{"id":"bf857ac6-8e7a-41b8-959c-c6889f970647","type":"LinearAxis"},{"id":"a1fe5141-207c-400f-bfc2-ed318059e0d8","type":"Grid"},{"id":"03ce4858-c437-47df-8a02-0d450fbb56c8","type":"Grid"}],"title":null,"toolbar":{"id":"c725aaa8-6596-4b42-bd8f-9d3faac74007","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"b300525b-0fd5-40e1-b124-f7eec36ce54d","type":"DataRange1d"},"x_scale":{"id":"3c538d8f-a17f-4255-8181-9718ae6f094c","type":"LinearScale"},"y_range":{"id":"5238bc13-824c-46d8-92d7-410333b5438e","type":"DataRange1d"},"y_scale":{"id":"47b18bd8-3bc6-4146-817f-5b551c0bfce2","type":"LinearScale"}},"id":"0ad4211c-6531-43e4-97a0-8bc447379e5d","type":"Plot"},{"attributes":{"line_color":{"value":"#f46d43"},"x":{"field":"x"},"y":{"field":"y1"}},"id":"767282dc-63cd-41df-9406-68450af3523e","type":"Step"},{"attributes":{"source":{"id":"5636b81b-563f-4e92-953e-dd69bf4076e4","type":"ColumnDataSource"}},"id":"57110689-7233-44ea-bc83-10dc7b4bdafe","type":"CDSView"},{"attributes":{},"id":"7a433648-a8db-4aff-a17e-dca8f0482ca9","type":"BasicTickFormatter"},{"attributes":{},"id":"3a5e6bdc-aecb-4a22-a587-ab9998df231f","type":"Selection"},{"attributes":{"data_source":{"id":"5636b81b-563f-4e92-953e-dd69bf4076e4","type":"ColumnDataSource"},"glyph":{"id":"767282dc-63cd-41df-9406-68450af3523e","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"57110689-7233-44ea-bc83-10dc7b4bdafe","type":"CDSView"}},"id":"70b93742-6f64-4855-8f52-febfee15337b","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"5238bc13-824c-46d8-92d7-410333b5438e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"7a433648-a8db-4aff-a17e-dca8f0482ca9","type":"BasicTickFormatter"},"plot":{"id":"0ad4211c-6531-43e4-97a0-8bc447379e5d","type":"Plot"},"ticker":{"id":"5f5480c4-7cbd-4204-890a-f8642cedde46","type":"BasicTicker"}},"id":"bf857ac6-8e7a-41b8-959c-c6889f970647","type":"LinearAxis"},{"attributes":{"formatter":{"id":"0d5f8af9-6708-470e-86c6-7fe27bab50d9","type":"BasicTickFormatter"},"plot":{"id":"0ad4211c-6531-43e4-97a0-8bc447379e5d","type":"Plot"},"ticker":{"id":"5260881f-f9a9-4562-b809-2b9360f2c4f6","type":"BasicTicker"}},"id":"b74d0274-cfd5-486b-9383-aee23aa21f45","type":"LinearAxis"},{"attributes":{},"id":"31fefa73-69a4-42bd-b933-c1bde57a0c43","type":"UnionRenderers"},{"attributes":{"source":{"id":"5636b81b-563f-4e92-953e-dd69bf4076e4","type":"ColumnDataSource"}},"id":"3fa758dd-6627-47b7-adc7-fa87d322084f","type":"CDSView"},{"attributes":{"callback":null},"id":"b300525b-0fd5-40e1-b124-f7eec36ce54d","type":"DataRange1d"},{"attributes":{"data_source":{"id":"5636b81b-563f-4e92-953e-dd69bf4076e4","type":"ColumnDataSource"},"glyph":{"id":"38988f4c-1d73-4a9d-b9f6-b2697bcd857b","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"3fa758dd-6627-47b7-adc7-fa87d322084f","type":"CDSView"}},"id":"c3c815f0-caec-440e-aefe-bed2a4dcbf1d","type":"GlyphRenderer"},{"attributes":{"source":{"id":"5636b81b-563f-4e92-953e-dd69bf4076e4","type":"ColumnDataSource"}},"id":"a23789de-1530-4093-8aed-330cd2e1a333","type":"CDSView"},{"attributes":{},"id":"5260881f-f9a9-4562-b809-2b9360f2c4f6","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAAMCamZmZmZn5vzMzMzMzM/O/mJmZmZmZ6b+YmZmZmZnZvwAAAAAAAAAAoJmZmZmZ2T+cmZmZmZnpPzQzMzMzM/M/mpmZmZmZ+T8AAAAAAAAAQA==","dtype":"float64","shape":[11]},"y1":{"__ndarray__":"AAAAAAAAEEB8FK5H4XoEQArXo3A9Cvc/eBSuR+F65D94FK5H4XrEPwAAAAAAAAAAhRSuR+F6xD9/FK5H4XrkPwzXo3A9Cvc/fBSuR+F6BEAAAAAAAAAQQA==","dtype":"float64","shape":[11]},"y2":{"__ndarray__":"AAAAAAAAGEA+CtejcD0SQIXrUbgehQtAHoXrUbgeBUBI4XoUrkcBQAAAAAAAAABASOF6FK5HAUAghetRuB4FQIbrUbgehQtAPgrXo3A9EkAAAAAAAAAYQA==","dtype":"float64","shape":[11]},"y3":{"__ndarray__":"AAAAAAAAIEA+CtejcD0aQML1KFyPwhVAj8L1KFyPEkCkcD0K16MQQAAAAAAAABBApHA9CtejEECQwvUoXI8SQMP1KFyPwhVAPgrXo3A9GkAAAAAAAAAgQA==","dtype":"float64","shape":[11]}},"selected":{"id":"3a5e6bdc-aecb-4a22-a587-ab9998df231f","type":"Selection"},"selection_policy":{"id":"31fefa73-69a4-42bd-b933-c1bde57a0c43","type":"UnionRenderers"}},"id":"5636b81b-563f-4e92-953e-dd69bf4076e4","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#cab2d6"},"line_width":{"value":3},"mode":"after","x":{"field":"x"},"y":{"field":"y3"}},"id":"ca94a238-7467-490e-b3e3-e8f38064c9de","type":"Step"},{"attributes":{"data_source":{"id":"5636b81b-563f-4e92-953e-dd69bf4076e4","type":"ColumnDataSource"},"glyph":{"id":"ca94a238-7467-490e-b3e3-e8f38064c9de","type":"Step"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"a23789de-1530-4093-8aed-330cd2e1a333","type":"CDSView"}},"id":"8a0d9527-e087-4f17-8806-72a9212b14f8","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"0ad4211c-6531-43e4-97a0-8bc447379e5d","type":"Plot"},"ticker":{"id":"5260881f-f9a9-4562-b809-2b9360f2c4f6","type":"BasicTicker"}},"id":"a1fe5141-207c-400f-bfc2-ed318059e0d8","type":"Grid"},{"attributes":{},"id":"47b18bd8-3bc6-4146-817f-5b551c0bfce2","type":"LinearScale"},{"attributes":{"line_color":{"value":"#1d91d0"},"line_dash":[6],"mode":"center","x":{"field":"x"},"y":{"field":"y2"}},"id":"38988f4c-1d73-4a9d-b9f6-b2697bcd857b","type":"Step"},{"attributes":{"dimension":1,"plot":{"id":"0ad4211c-6531-43e4-97a0-8bc447379e5d","type":"Plot"},"ticker":{"id":"5f5480c4-7cbd-4204-890a-f8642cedde46","type":"BasicTicker"}},"id":"03ce4858-c437-47df-8a02-0d450fbb56c8","type":"Grid"},{"attributes":{},"id":"3c538d8f-a17f-4255-8181-9718ae6f094c","type":"LinearScale"}],"root_ids":["0ad4211c-6531-43e4-97a0-8bc447379e5d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"2bbcc152-07a6-4886-9acb-7dcbb7932bb1","roots":{"0ad4211c-6531-43e4-97a0-8bc447379e5d":"3897acef-7f38-4021-a7f6-553a271b1edb"}}];
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
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing")
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
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.13.0.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.13.0.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();