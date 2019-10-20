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
      };var element = document.getElementById("667c4f9c-2f82-4469-8056-61f7f2eaaf49");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '667c4f9c-2f82-4469-8056-61f7f2eaaf49' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"014ff821-417a-4d67-a4fe-7d40cb2f5da1":{"roots":{"references":[{"attributes":{"below":[{"id":"b65dbef8-533c-46a2-8737-eadfdcdb8c7f","type":"LinearAxis"}],"left":[{"id":"660f5cfd-932f-4e18-9293-bcfbee42b321","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"b65dbef8-533c-46a2-8737-eadfdcdb8c7f","type":"LinearAxis"},{"id":"cf54528a-2e77-4de3-97c6-feb33818ae24","type":"Grid"},{"id":"660f5cfd-932f-4e18-9293-bcfbee42b321","type":"LinearAxis"},{"id":"55d2a88c-c4fb-4363-9e97-324a546c40eb","type":"Grid"},{"id":"82969295-6297-43a9-895e-111d44c32b81","type":"BoxAnnotation"},{"id":"fec11f1a-5611-4d75-adf5-8b1304373310","type":"GlyphRenderer"}],"title":{"id":"b7da7739-7893-40f2-890f-a565239e78f4","type":"Title"},"toolbar":{"id":"84a71222-8fde-4f92-bfed-15a687082a11","type":"Toolbar"},"x_range":{"id":"b3d02a7f-b0c8-4dd7-8200-b28492885e61","type":"DataRange1d"},"x_scale":{"id":"ca0f8cfe-4219-4075-a845-10af55d75012","type":"LinearScale"},"y_range":{"id":"088804c7-53ae-4767-a4e3-a98c1c7418f4","type":"DataRange1d"},"y_scale":{"id":"151e9c5e-39cd-4a01-9d05-70a1ab39ac91","type":"LinearScale"}},"id":"703324e3-7bf2-4f50-b45e-02078d27b90d","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"1eb81544-6eed-4d3e-8366-29950e439091","type":"CircleCross"},{"attributes":{"formatter":{"id":"5618ca0b-4337-4741-90c9-5e9dd0c705c1","type":"BasicTickFormatter"},"plot":{"id":"703324e3-7bf2-4f50-b45e-02078d27b90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"059f2282-8c5d-48e7-a648-0cf19f76c749","type":"BasicTicker"}},"id":"660f5cfd-932f-4e18-9293-bcfbee42b321","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#FB8072"},"line_color":{"value":"#FB8072"},"line_width":{"value":2},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"f46bb302-5eb3-46c1-b661-791017244539","type":"CircleCross"},{"attributes":{},"id":"85e6fe69-b998-4cb4-b2dd-0f3c240c5e9c","type":"BasicTicker"},{"attributes":{},"id":"5618ca0b-4337-4741-90c9-5e9dd0c705c1","type":"BasicTickFormatter"},{"attributes":{},"id":"31ac93c5-6ee8-4b4a-8a76-59fbf7a845e5","type":"SaveTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"82969295-6297-43a9-895e-111d44c32b81","type":"BoxAnnotation"},{"attributes":{"plot":null,"text":""},"id":"b7da7739-7893-40f2-890f-a565239e78f4","type":"Title"},{"attributes":{},"id":"104d1fdb-dfba-40c8-8e89-9fa4e8b74acb","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"0240496a-5d46-4ccb-ab6d-af28a126d321","type":"ColumnDataSource"},"glyph":{"id":"f46bb302-5eb3-46c1-b661-791017244539","type":"CircleCross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1eb81544-6eed-4d3e-8366-29950e439091","type":"CircleCross"},"selection_glyph":null,"view":{"id":"2c3c0cdd-3574-4c19-b9a8-f387523499aa","type":"CDSView"}},"id":"fec11f1a-5611-4d75-adf5-8b1304373310","type":"GlyphRenderer"},{"attributes":{"source":{"id":"0240496a-5d46-4ccb-ab6d-af28a126d321","type":"ColumnDataSource"}},"id":"2c3c0cdd-3574-4c19-b9a8-f387523499aa","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[4,5,6]},"selected":{"id":"934ce488-df75-472f-aa09-996b40e92236","type":"Selection"},"selection_policy":{"id":"104d1fdb-dfba-40c8-8e89-9fa4e8b74acb","type":"UnionRenderers"}},"id":"0240496a-5d46-4ccb-ab6d-af28a126d321","type":"ColumnDataSource"},{"attributes":{},"id":"b8ded12b-9089-426e-966d-9d5932dcb897","type":"HelpTool"},{"attributes":{"callback":null},"id":"b3d02a7f-b0c8-4dd7-8200-b28492885e61","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"39d1b411-80c2-4ae5-a63e-6092a9bbb99c","type":"PanTool"},{"id":"3bd08e5b-2d93-43e4-820c-5086da3a4d3f","type":"WheelZoomTool"},{"id":"54aa8259-5d71-4eca-8e5c-f047a6ccdcf8","type":"BoxZoomTool"},{"id":"31ac93c5-6ee8-4b4a-8a76-59fbf7a845e5","type":"SaveTool"},{"id":"051cd246-0c5a-4ad7-a425-58e035cfbf6d","type":"ResetTool"},{"id":"b8ded12b-9089-426e-966d-9d5932dcb897","type":"HelpTool"}]},"id":"84a71222-8fde-4f92-bfed-15a687082a11","type":"Toolbar"},{"attributes":{"formatter":{"id":"7b58b6d0-17c2-4c13-9282-6282f88d056c","type":"BasicTickFormatter"},"plot":{"id":"703324e3-7bf2-4f50-b45e-02078d27b90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"85e6fe69-b998-4cb4-b2dd-0f3c240c5e9c","type":"BasicTicker"}},"id":"b65dbef8-533c-46a2-8737-eadfdcdb8c7f","type":"LinearAxis"},{"attributes":{},"id":"151e9c5e-39cd-4a01-9d05-70a1ab39ac91","type":"LinearScale"},{"attributes":{},"id":"39d1b411-80c2-4ae5-a63e-6092a9bbb99c","type":"PanTool"},{"attributes":{},"id":"051cd246-0c5a-4ad7-a425-58e035cfbf6d","type":"ResetTool"},{"attributes":{},"id":"7b58b6d0-17c2-4c13-9282-6282f88d056c","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"088804c7-53ae-4767-a4e3-a98c1c7418f4","type":"DataRange1d"},{"attributes":{"plot":{"id":"703324e3-7bf2-4f50-b45e-02078d27b90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"85e6fe69-b998-4cb4-b2dd-0f3c240c5e9c","type":"BasicTicker"}},"id":"cf54528a-2e77-4de3-97c6-feb33818ae24","type":"Grid"},{"attributes":{},"id":"059f2282-8c5d-48e7-a648-0cf19f76c749","type":"BasicTicker"},{"attributes":{},"id":"934ce488-df75-472f-aa09-996b40e92236","type":"Selection"},{"attributes":{"dimension":1,"plot":{"id":"703324e3-7bf2-4f50-b45e-02078d27b90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"059f2282-8c5d-48e7-a648-0cf19f76c749","type":"BasicTicker"}},"id":"55d2a88c-c4fb-4363-9e97-324a546c40eb","type":"Grid"},{"attributes":{},"id":"3bd08e5b-2d93-43e4-820c-5086da3a4d3f","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"82969295-6297-43a9-895e-111d44c32b81","type":"BoxAnnotation"}},"id":"54aa8259-5d71-4eca-8e5c-f047a6ccdcf8","type":"BoxZoomTool"},{"attributes":{},"id":"ca0f8cfe-4219-4075-a845-10af55d75012","type":"LinearScale"}],"root_ids":["703324e3-7bf2-4f50-b45e-02078d27b90d"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"014ff821-417a-4d67-a4fe-7d40cb2f5da1","roots":{"703324e3-7bf2-4f50-b45e-02078d27b90d":"667c4f9c-2f82-4469-8056-61f7f2eaaf49"}}];
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