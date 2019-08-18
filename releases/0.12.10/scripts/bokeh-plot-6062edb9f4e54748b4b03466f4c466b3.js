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
      };var element = document.getElementById("0b6014c3-12ed-43b5-b2ee-654cbe2aebc3");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '0b6014c3-12ed-43b5-b2ee-654cbe2aebc3' but no matching script tag was found. ")
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
                    var docs_json = {"256d9e41-6ef7-4c94-88d1-228f7eb553ec":{"roots":{"references":[{"attributes":{},"id":"069c21f1-2a77-4835-a275-493afedc59c3","type":"CategoricalTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[50,40,65,10,25,37,80,60],"y":["a","b","c","d","e","f","g","h"]}},"id":"48f414f2-bffc-4210-a074-90138db8d28b","type":"ColumnDataSource"},{"attributes":{},"id":"fc591895-7db2-45ea-8491-82bdf02d7c46","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6ec0812a-9f86-4dc3-9210-903a7de5c12e","type":"BoxAnnotation"},{"attributes":{},"id":"2c8e4eca-95d5-4d24-a121-2f9dd6bc1944","type":"BasicTicker"},{"attributes":{"plot":{"id":"3f4e2fdb-8fee-4dbc-9dbb-2b9a66608255","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c8e4eca-95d5-4d24-a121-2f9dd6bc1944","type":"BasicTicker"}},"id":"038e12a6-9d7b-4e23-a81f-fc82086bcd2c","type":"Grid"},{"attributes":{"below":[{"id":"4cccff28-4989-46a4-a7fb-4bbffb76e43e","type":"LinearAxis"}],"left":[{"id":"71647a35-1d98-458a-a1eb-16b0aa8170af","type":"CategoricalAxis"}],"renderers":[{"id":"4cccff28-4989-46a4-a7fb-4bbffb76e43e","type":"LinearAxis"},{"id":"038e12a6-9d7b-4e23-a81f-fc82086bcd2c","type":"Grid"},{"id":"71647a35-1d98-458a-a1eb-16b0aa8170af","type":"CategoricalAxis"},{"id":"5e5d5d2a-08af-4665-9a06-351b7a37211e","type":"Grid"},{"id":"6ec0812a-9f86-4dc3-9210-903a7de5c12e","type":"BoxAnnotation"},{"id":"2f3ef51c-e4a6-4676-8ac2-3e71b4ef66a2","type":"GlyphRenderer"}],"title":{"id":"8224db23-8c1e-4500-8b93-a0a009ec156a","type":"Title"},"toolbar":{"id":"6ba2c98a-90db-4528-b6cc-31a2f1cf40f1","type":"Toolbar"},"x_range":{"id":"af8a8bae-6315-41d8-b737-ff87e8adfd61","type":"DataRange1d"},"x_scale":{"id":"b9843e44-50b8-4eb2-842d-6f0a7b6cbf6e","type":"LinearScale"},"y_range":{"id":"31789a98-910a-4b74-9dfd-389ac7f35dce","type":"FactorRange"},"y_scale":{"id":"0d95efbb-65ee-4b21-8663-8f7e8bf8cfca","type":"CategoricalScale"}},"id":"3f4e2fdb-8fee-4dbc-9dbb-2b9a66608255","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"df8c84b6-fd0c-44c5-83d6-a91303667ebe","type":"PanTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"df8c84b6-fd0c-44c5-83d6-a91303667ebe","type":"PanTool"},{"id":"975e8c27-7e63-4f16-bdd2-4739f4f52706","type":"WheelZoomTool"},{"id":"c31492e7-3cad-46b3-91c9-7ec88006107b","type":"BoxZoomTool"},{"id":"e5a19bea-8738-48cc-983d-f8bc1dc7c983","type":"SaveTool"},{"id":"fc591895-7db2-45ea-8491-82bdf02d7c46","type":"ResetTool"},{"id":"7c5a2e55-9a52-452b-ba88-edd08d765cf9","type":"HelpTool"}]},"id":"6ba2c98a-90db-4528-b6cc-31a2f1cf40f1","type":"Toolbar"},{"attributes":{},"id":"7c5a2e55-9a52-452b-ba88-edd08d765cf9","type":"HelpTool"},{"attributes":{},"id":"dd093645-88d1-4cce-94fc-42a5d5ef4a79","type":"CategoricalTickFormatter"},{"attributes":{"callback":null},"id":"af8a8bae-6315-41d8-b737-ff87e8adfd61","type":"DataRange1d"},{"attributes":{"formatter":{"id":"dd093645-88d1-4cce-94fc-42a5d5ef4a79","type":"CategoricalTickFormatter"},"plot":{"id":"3f4e2fdb-8fee-4dbc-9dbb-2b9a66608255","subtype":"Figure","type":"Plot"},"ticker":{"id":"069c21f1-2a77-4835-a275-493afedc59c3","type":"CategoricalTicker"}},"id":"71647a35-1d98-458a-a1eb-16b0aa8170af","type":"CategoricalAxis"},{"attributes":{"overlay":{"id":"6ec0812a-9f86-4dc3-9210-903a7de5c12e","type":"BoxAnnotation"}},"id":"c31492e7-3cad-46b3-91c9-7ec88006107b","type":"BoxZoomTool"},{"attributes":{"source":{"id":"48f414f2-bffc-4210-a074-90138db8d28b","type":"ColumnDataSource"}},"id":"6a6996b8-4d78-4763-8aa3-027431d7adac","type":"CDSView"},{"attributes":{"callback":null,"factors":["a","b","c","d","e","f","g","h"]},"id":"31789a98-910a-4b74-9dfd-389ac7f35dce","type":"FactorRange"},{"attributes":{},"id":"b9843e44-50b8-4eb2-842d-6f0a7b6cbf6e","type":"LinearScale"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"green"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"8be68e0e-1ec2-4cb5-9568-e0c4b275bf13","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"3f4e2fdb-8fee-4dbc-9dbb-2b9a66608255","subtype":"Figure","type":"Plot"},"ticker":{"id":"069c21f1-2a77-4835-a275-493afedc59c3","type":"CategoricalTicker"}},"id":"5e5d5d2a-08af-4665-9a06-351b7a37211e","type":"Grid"},{"attributes":{"plot":null,"text":""},"id":"8224db23-8c1e-4500-8b93-a0a009ec156a","type":"Title"},{"attributes":{},"id":"0d95efbb-65ee-4b21-8663-8f7e8bf8cfca","type":"CategoricalScale"},{"attributes":{"formatter":{"id":"053dfec6-e32d-48eb-aa6f-341e0a7840d3","type":"BasicTickFormatter"},"plot":{"id":"3f4e2fdb-8fee-4dbc-9dbb-2b9a66608255","subtype":"Figure","type":"Plot"},"ticker":{"id":"2c8e4eca-95d5-4d24-a121-2f9dd6bc1944","type":"BasicTicker"}},"id":"4cccff28-4989-46a4-a7fb-4bbffb76e43e","type":"LinearAxis"},{"attributes":{},"id":"975e8c27-7e63-4f16-bdd2-4739f4f52706","type":"WheelZoomTool"},{"attributes":{},"id":"e5a19bea-8738-48cc-983d-f8bc1dc7c983","type":"SaveTool"},{"attributes":{"data_source":{"id":"48f414f2-bffc-4210-a074-90138db8d28b","type":"ColumnDataSource"},"glyph":{"id":"8be68e0e-1ec2-4cb5-9568-e0c4b275bf13","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ecee6ced-16d7-4837-bf8d-57c011b0daaa","type":"Circle"},"selection_glyph":null,"view":{"id":"6a6996b8-4d78-4763-8aa3-027431d7adac","type":"CDSView"}},"id":"2f3ef51c-e4a6-4676-8ac2-3e71b4ef66a2","type":"GlyphRenderer"},{"attributes":{},"id":"053dfec6-e32d-48eb-aa6f-341e0a7840d3","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":3},"size":{"units":"screen","value":15},"x":{"field":"x"},"y":{"field":"y"}},"id":"ecee6ced-16d7-4837-bf8d-57c011b0daaa","type":"Circle"}],"root_ids":["3f4e2fdb-8fee-4dbc-9dbb-2b9a66608255"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"256d9e41-6ef7-4c94-88d1-228f7eb553ec","elementid":"0b6014c3-12ed-43b5-b2ee-654cbe2aebc3","modelid":"3f4e2fdb-8fee-4dbc-9dbb-2b9a66608255"}];
                
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
