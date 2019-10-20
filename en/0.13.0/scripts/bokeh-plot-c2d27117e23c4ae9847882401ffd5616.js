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
      };var element = document.getElementById("f56b2551-f0bc-47fa-931e-8c16641fb05b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f56b2551-f0bc-47fa-931e-8c16641fb05b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"fa1a49a0-9a9b-41d1-b2da-5b45d22456aa":{"roots":{"references":[{"attributes":{},"id":"324ffe46-9934-4cad-8e08-80cde6927f20","type":"HelpTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"5d92882b-603b-41e8-af59-e7d3a33c40b6","type":"Circle"},{"attributes":{"formatter":{"id":"1d0220f5-7255-416f-8f3f-e5a00d2504a8","type":"BasicTickFormatter"},"plot":{"id":"85910544-1507-4b63-9c6d-6450c6f7cb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab621ce9-b121-4be2-9b63-0032441b7afe","type":"BasicTicker"}},"id":"3755d62c-6cd7-4fe1-9f9d-a402093ea1cc","type":"LinearAxis"},{"attributes":{"data_source":{"id":"bce4c915-a7bc-4409-9f51-a07c1fe4ad68","type":"ColumnDataSource"},"glyph":{"id":"56090ab4-e23e-45fc-80e0-1801c50530d6","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"5d92882b-603b-41e8-af59-e7d3a33c40b6","type":"Circle"},"selection_glyph":null,"view":{"id":"a7657d4d-623a-4fd0-8bd2-c6e48e564136","type":"CDSView"}},"id":"33d38c2c-b49d-4d78-87c7-bf6d39890ec9","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"10433c99-a1e0-438b-b66f-887714bc39b0","type":"BasicTickFormatter"},"plot":{"id":"85910544-1507-4b63-9c6d-6450c6f7cb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e69f1a4-4561-4fae-bff0-dc9a3e8762c2","type":"BasicTicker"}},"id":"c70980cf-4c3b-4443-a6c5-3c212346bb83","type":"LinearAxis"},{"attributes":{},"id":"60a4aaf9-f6a5-44a0-ad6f-685888371e61","type":"PanTool"},{"attributes":{},"id":"10433c99-a1e0-438b-b66f-887714bc39b0","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"bce4c915-a7bc-4409-9f51-a07c1fe4ad68","type":"ColumnDataSource"}},"id":"a7657d4d-623a-4fd0-8bd2-c6e48e564136","type":"CDSView"},{"attributes":{"overlay":{"id":"a6ca45c2-4279-461f-a9ae-1afba2492443","type":"BoxAnnotation"}},"id":"23229cfb-0146-4dfb-b1e1-36d03feff212","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"60a4aaf9-f6a5-44a0-ad6f-685888371e61","type":"PanTool"},{"id":"b932b67d-19ca-4942-be01-0fdc2fe13acf","type":"WheelZoomTool"},{"id":"23229cfb-0146-4dfb-b1e1-36d03feff212","type":"BoxZoomTool"},{"id":"27ede812-0df2-4f37-80ed-524b1dc97ee0","type":"SaveTool"},{"id":"30e79564-9de1-4d9f-bb55-d1733a679099","type":"ResetTool"},{"id":"324ffe46-9934-4cad-8e08-80cde6927f20","type":"HelpTool"}]},"id":"bc5c9335-d32e-4326-8b95-573887523ea4","type":"Toolbar"},{"attributes":{"callback":null},"id":"e011f23d-67f8-4280-816d-de4008256b41","type":"DataRange1d"},{"attributes":{"below":[{"id":"3755d62c-6cd7-4fe1-9f9d-a402093ea1cc","type":"LinearAxis"}],"left":[{"id":"c70980cf-4c3b-4443-a6c5-3c212346bb83","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3755d62c-6cd7-4fe1-9f9d-a402093ea1cc","type":"LinearAxis"},{"id":"78da5f8d-6aec-4740-b755-c923ab9b2442","type":"Grid"},{"id":"c70980cf-4c3b-4443-a6c5-3c212346bb83","type":"LinearAxis"},{"id":"553d2bba-2c00-4285-87bd-e2b7f453a47c","type":"Grid"},{"id":"a6ca45c2-4279-461f-a9ae-1afba2492443","type":"BoxAnnotation"},{"id":"33d38c2c-b49d-4d78-87c7-bf6d39890ec9","type":"GlyphRenderer"}],"title":{"id":"3a9e13c0-d51c-4e06-a3f2-b6a3cb0efb6d","type":"Title"},"toolbar":{"id":"bc5c9335-d32e-4326-8b95-573887523ea4","type":"Toolbar"},"x_range":{"id":"e011f23d-67f8-4280-816d-de4008256b41","type":"DataRange1d"},"x_scale":{"id":"9e2df365-94bc-4670-b6c8-3793523b4508","type":"LinearScale"},"y_range":{"id":"4e9380a6-ba31-4790-b6c1-39d157b945ce","type":"DataRange1d"},"y_scale":{"id":"8097bdf7-885d-4ce5-9366-da0d0fb898b3","type":"LinearScale"}},"id":"85910544-1507-4b63-9c6d-6450c6f7cb0f","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1d0220f5-7255-416f-8f3f-e5a00d2504a8","type":"BasicTickFormatter"},{"attributes":{},"id":"30e79564-9de1-4d9f-bb55-d1733a679099","type":"ResetTool"},{"attributes":{"plot":null,"text":""},"id":"3a9e13c0-d51c-4e06-a3f2-b6a3cb0efb6d","type":"Title"},{"attributes":{},"id":"b932b67d-19ca-4942-be01-0fdc2fe13acf","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"a6ca45c2-4279-461f-a9ae-1afba2492443","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"4e9380a6-ba31-4790-b6c1-39d157b945ce","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"56090ab4-e23e-45fc-80e0-1801c50530d6","type":"Circle"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"85910544-1507-4b63-9c6d-6450c6f7cb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"ab621ce9-b121-4be2-9b63-0032441b7afe","type":"BasicTicker"}},"id":"78da5f8d-6aec-4740-b755-c923ab9b2442","type":"Grid"},{"attributes":{},"id":"27ede812-0df2-4f37-80ed-524b1dc97ee0","type":"SaveTool"},{"attributes":{},"id":"8097bdf7-885d-4ce5-9366-da0d0fb898b3","type":"LinearScale"},{"attributes":{},"id":"e3c26dd0-2f61-4c66-acd5-959ccf6b8ad2","type":"Selection"},{"attributes":{},"id":"ab621ce9-b121-4be2-9b63-0032441b7afe","type":"BasicTicker"},{"attributes":{},"id":"0e69f1a4-4561-4fae-bff0-dc9a3e8762c2","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]},"selected":{"id":"e3c26dd0-2f61-4c66-acd5-959ccf6b8ad2","type":"Selection"},"selection_policy":{"id":"529e0067-23a9-4899-98a1-4befc87d7c05","type":"UnionRenderers"}},"id":"bce4c915-a7bc-4409-9f51-a07c1fe4ad68","type":"ColumnDataSource"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0.5},"grid_line_dash":[6,4],"plot":{"id":"85910544-1507-4b63-9c6d-6450c6f7cb0f","subtype":"Figure","type":"Plot"},"ticker":{"id":"0e69f1a4-4561-4fae-bff0-dc9a3e8762c2","type":"BasicTicker"}},"id":"553d2bba-2c00-4285-87bd-e2b7f453a47c","type":"Grid"},{"attributes":{},"id":"529e0067-23a9-4899-98a1-4befc87d7c05","type":"UnionRenderers"},{"attributes":{},"id":"9e2df365-94bc-4670-b6c8-3793523b4508","type":"LinearScale"}],"root_ids":["85910544-1507-4b63-9c6d-6450c6f7cb0f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"fa1a49a0-9a9b-41d1-b2da-5b45d22456aa","roots":{"85910544-1507-4b63-9c6d-6450c6f7cb0f":"f56b2551-f0bc-47fa-931e-8c16641fb05b"}}];
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