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
      };var element = document.getElementById("3c0c25ee-7462-4d26-94ff-eaeb12f4f736");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3c0c25ee-7462-4d26-94ff-eaeb12f4f736' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                    var docs_json = {"a659d0a7-be27-4e00-ac87-6c95fbb9c4fc":{"roots":{"references":[{"attributes":{"source":{"id":"fdeba760-bea8-411e-9011-3ed794a61bde","type":"ColumnDataSource"}},"id":"d0783021-fce7-4548-a8fb-e2a61894c178","type":"CDSView"},{"attributes":{"callback":null},"id":"4fe1f9b0-12c7-41eb-ab49-4fa55426ac04","type":"DataRange1d"},{"attributes":{},"id":"9836c6cf-7e7d-49fe-a6fc-7cee311a0dde","type":"SaveTool"},{"attributes":{},"id":"8c48b17b-6410-4f0e-bfaf-55f9db3d7de7","type":"BasicTickFormatter"},{"attributes":{},"id":"7e06abf4-65e7-4db1-ac3a-860309f2e952","type":"ResetTool"},{"attributes":{"formatter":{"id":"8c48b17b-6410-4f0e-bfaf-55f9db3d7de7","type":"BasicTickFormatter"},"plot":{"id":"14e07295-ed50-4566-8179-14825e90a17b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8356c664-4817-498d-b1cb-7eef972eb3cf","type":"BasicTicker"}},"id":"cff2d772-6bd7-4bea-a168-c26150ec6d4a","type":"LinearAxis"},{"attributes":{"data_source":{"id":"fdeba760-bea8-411e-9011-3ed794a61bde","type":"ColumnDataSource"},"glyph":{"id":"ded8382f-8cc8-458d-bf97-62755f0fe236","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b7421866-912f-428d-9fd5-97c5d3019855","type":"Circle"},"selection_glyph":null,"view":{"id":"d0783021-fce7-4548-a8fb-e2a61894c178","type":"CDSView"}},"id":"24de849e-294e-4f05-b4a6-362b7994921d","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":""},"id":"6a12dc26-d546-41ec-9158-8a66f42295d2","type":"Title"},{"attributes":{"callback":null},"id":"822189bb-3358-4447-b574-cd86f1698a21","type":"DataRange1d"},{"attributes":{},"id":"efcfa694-0e51-4b25-97d3-f6ba815e0e78","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"ded8382f-8cc8-458d-bf97-62755f0fe236","type":"Circle"},{"attributes":{},"id":"d97b36a2-93c1-415f-b6ab-96be66bc5fb0","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.3},"x":{"field":"x"},"y":{"field":"y"}},"id":"b7421866-912f-428d-9fd5-97c5d3019855","type":"Circle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"efcfa694-0e51-4b25-97d3-f6ba815e0e78","type":"PanTool"},{"id":"7e06abf4-65e7-4db1-ac3a-860309f2e952","type":"ResetTool"},{"id":"9836c6cf-7e7d-49fe-a6fc-7cee311a0dde","type":"SaveTool"}]},"id":"b77e02b7-a5af-4288-b489-21f4a29491cb","type":"Toolbar"},{"attributes":{"below":[{"id":"d79d49da-eea0-4d88-8973-5d416bc1179e","type":"LinearAxis"}],"left":[{"id":"cff2d772-6bd7-4bea-a168-c26150ec6d4a","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"d79d49da-eea0-4d88-8973-5d416bc1179e","type":"LinearAxis"},{"id":"3c8879b8-d054-438b-910a-1e94b21a7b4c","type":"Grid"},{"id":"cff2d772-6bd7-4bea-a168-c26150ec6d4a","type":"LinearAxis"},{"id":"93e639be-d552-413a-b4cf-89a2224ff24a","type":"Grid"},{"id":"24de849e-294e-4f05-b4a6-362b7994921d","type":"GlyphRenderer"}],"title":{"id":"6a12dc26-d546-41ec-9158-8a66f42295d2","type":"Title"},"toolbar":{"id":"b77e02b7-a5af-4288-b489-21f4a29491cb","type":"Toolbar"},"x_range":{"id":"822189bb-3358-4447-b574-cd86f1698a21","type":"DataRange1d"},"x_scale":{"id":"9234e568-2511-48e5-8bbf-93952d4eff22","type":"LinearScale"},"y_range":{"id":"4fe1f9b0-12c7-41eb-ab49-4fa55426ac04","type":"DataRange1d"},"y_scale":{"id":"920c96dc-ca4c-47f0-89b3-2523f185beff","type":"LinearScale"}},"id":"14e07295-ed50-4566-8179-14825e90a17b","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"plot":{"id":"14e07295-ed50-4566-8179-14825e90a17b","subtype":"Figure","type":"Plot"},"ticker":{"id":"8356c664-4817-498d-b1cb-7eef972eb3cf","type":"BasicTicker"}},"id":"93e639be-d552-413a-b4cf-89a2224ff24a","type":"Grid"},{"attributes":{},"id":"8356c664-4817-498d-b1cb-7eef972eb3cf","type":"BasicTicker"},{"attributes":{},"id":"e5257043-2197-40fe-9374-8f7cad8dd3a7","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d97b36a2-93c1-415f-b6ab-96be66bc5fb0","type":"BasicTickFormatter"},"plot":{"id":"14e07295-ed50-4566-8179-14825e90a17b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5257043-2197-40fe-9374-8f7cad8dd3a7","type":"BasicTicker"}},"id":"d79d49da-eea0-4d88-8973-5d416bc1179e","type":"LinearAxis"},{"attributes":{"plot":{"id":"14e07295-ed50-4566-8179-14825e90a17b","subtype":"Figure","type":"Plot"},"ticker":{"id":"e5257043-2197-40fe-9374-8f7cad8dd3a7","type":"BasicTicker"}},"id":"3c8879b8-d054-438b-910a-1e94b21a7b4c","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2.5,3,2],"y":[2,3,1,1.5]}},"id":"fdeba760-bea8-411e-9011-3ed794a61bde","type":"ColumnDataSource"},{"attributes":{},"id":"920c96dc-ca4c-47f0-89b3-2523f185beff","type":"LinearScale"},{"attributes":{},"id":"9234e568-2511-48e5-8bbf-93952d4eff22","type":"LinearScale"}],"root_ids":["14e07295-ed50-4566-8179-14825e90a17b"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"a659d0a7-be27-4e00-ac87-6c95fbb9c4fc","elementid":"3c0c25ee-7462-4d26-94ff-eaeb12f4f736","modelid":"14e07295-ed50-4566-8179-14825e90a17b"}];
                
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
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
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
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
