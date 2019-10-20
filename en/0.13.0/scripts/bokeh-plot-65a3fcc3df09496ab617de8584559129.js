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
      };var element = document.getElementById("ddab34a2-ab3c-495c-be11-6c43d19c23ff");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ddab34a2-ab3c-495c-be11-6c43d19c23ff' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"d3d6d9fb-7685-4f13-a903-67c00bcfdacb":{"roots":{"references":[{"attributes":{"source":{"id":"5f441a4c-689e-40dc-930e-e1e4a7fe98ef","type":"ColumnDataSource"}},"id":"804ff7ac-426b-4ad1-9aa1-f78543235220","type":"CDSView"},{"attributes":{"formatter":{"id":"7147e636-e0de-4706-b911-9da6ab4612ba","type":"BasicTickFormatter"},"plot":{"id":"aec416cf-b819-4572-90ef-3e0138604e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"95cd1097-d6f9-45ba-abba-869fe34c74dd","type":"BasicTicker"}},"id":"bcdf1ba9-15d9-44ad-8f12-d4b804a37ffb","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"9fb67344-aa9f-48a4-acad-0fa18c56b760","type":"Circle"},{"attributes":{},"id":"66111fe4-1ba7-4bef-803c-c8f311c28ba4","type":"BasicTicker"},{"attributes":{"plot":null,"text":""},"id":"a014a4da-6f60-4ed2-9c07-88e19d8e28f2","type":"Title"},{"attributes":{"callback":null,"end":7},"id":"1bd30803-0c60-4b12-b903-8636c3c8206b","type":"Range1d"},{"attributes":{},"id":"7147e636-e0de-4706-b911-9da6ab4612ba","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"aec416cf-b819-4572-90ef-3e0138604e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"95cd1097-d6f9-45ba-abba-869fe34c74dd","type":"BasicTicker"}},"id":"2b42a862-5d8e-4923-b57a-d7faea3d714f","type":"Grid"},{"attributes":{},"id":"95cd1097-d6f9-45ba-abba-869fe34c74dd","type":"BasicTicker"},{"attributes":{},"id":"f5d2d05f-5da6-4c09-8350-75cf704aece2","type":"LinearScale"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"85c95506-8d2b-40ac-ac6a-3e65d16fa462","type":"GlyphRenderer"}]},"id":"aa3a1d4f-b57e-4ce9-b2d9-2ba5b5f6bbdd","type":"LegendItem"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"a8e798bd-acc9-43ce-89ab-78c85639c47e","type":"SaveTool"}]},"id":"262b2281-9c6e-49f0-be07-43d45fff015a","type":"Toolbar"},{"attributes":{"plot":{"id":"aec416cf-b819-4572-90ef-3e0138604e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"66111fe4-1ba7-4bef-803c-c8f311c28ba4","type":"BasicTicker"}},"id":"f0ac296d-655f-4a25-957a-4b236d184f57","type":"Grid"},{"attributes":{},"id":"4ebc9042-62b9-4a48-b550-096808c2fda4","type":"BasicTickFormatter"},{"attributes":{},"id":"8aa85332-bbb8-4fdc-8578-8448ca1068d4","type":"LinearScale"},{"attributes":{"callback":null,"end":3},"id":"8bc5235e-123c-4947-92ac-7cab06c8cef0","type":"Range1d"},{"attributes":{"below":[{"id":"e48e66cd-cc11-4afa-b746-02736212f02e","type":"LinearAxis"}],"left":[{"id":"bcdf1ba9-15d9-44ad-8f12-d4b804a37ffb","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"e48e66cd-cc11-4afa-b746-02736212f02e","type":"LinearAxis"},{"id":"f0ac296d-655f-4a25-957a-4b236d184f57","type":"Grid"},{"id":"bcdf1ba9-15d9-44ad-8f12-d4b804a37ffb","type":"LinearAxis"},{"id":"2b42a862-5d8e-4923-b57a-d7faea3d714f","type":"Grid"},{"id":"18db8b5f-610d-4201-893f-1a38cfdd0a11","type":"Legend"},{"id":"85c95506-8d2b-40ac-ac6a-3e65d16fa462","type":"GlyphRenderer"}],"title":{"id":"a014a4da-6f60-4ed2-9c07-88e19d8e28f2","type":"Title"},"toolbar":{"id":"262b2281-9c6e-49f0-be07-43d45fff015a","type":"Toolbar"},"x_range":{"id":"1bd30803-0c60-4b12-b903-8636c3c8206b","type":"Range1d"},"x_scale":{"id":"f5d2d05f-5da6-4c09-8350-75cf704aece2","type":"LinearScale"},"y_range":{"id":"8bc5235e-123c-4947-92ac-7cab06c8cef0","type":"Range1d"},"y_scale":{"id":"8aa85332-bbb8-4fdc-8578-8448ca1068d4","type":"LinearScale"}},"id":"aec416cf-b819-4572-90ef-3e0138604e2f","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"5f441a4c-689e-40dc-930e-e1e4a7fe98ef","type":"ColumnDataSource"},"glyph":{"id":"0583c70e-abb1-4fe1-8fa8-f610531248f1","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"9fb67344-aa9f-48a4-acad-0fa18c56b760","type":"Circle"},"selection_glyph":null,"view":{"id":"804ff7ac-426b-4ad1-9aa1-f78543235220","type":"CDSView"}},"id":"85c95506-8d2b-40ac-ac6a-3e65d16fa462","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]},"selected":{"id":"fc4ebabb-c94b-4634-8ccf-446f4be33f2a","type":"Selection"},"selection_policy":{"id":"ed3d5939-27a1-47f1-a58a-d4abec5b5259","type":"UnionRenderers"}},"id":"5f441a4c-689e-40dc-930e-e1e4a7fe98ef","type":"ColumnDataSource"},{"attributes":{"items":[{"id":"aa3a1d4f-b57e-4ce9-b2d9-2ba5b5f6bbdd","type":"LegendItem"}],"plot":{"id":"aec416cf-b819-4572-90ef-3e0138604e2f","subtype":"Figure","type":"Plot"}},"id":"18db8b5f-610d-4201-893f-1a38cfdd0a11","type":"Legend"},{"attributes":{},"id":"ed3d5939-27a1-47f1-a58a-d4abec5b5259","type":"UnionRenderers"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"0583c70e-abb1-4fe1-8fa8-f610531248f1","type":"Circle"},{"attributes":{"formatter":{"id":"4ebc9042-62b9-4a48-b550-096808c2fda4","type":"BasicTickFormatter"},"plot":{"id":"aec416cf-b819-4572-90ef-3e0138604e2f","subtype":"Figure","type":"Plot"},"ticker":{"id":"66111fe4-1ba7-4bef-803c-c8f311c28ba4","type":"BasicTicker"}},"id":"e48e66cd-cc11-4afa-b746-02736212f02e","type":"LinearAxis"},{"attributes":{},"id":"a8e798bd-acc9-43ce-89ab-78c85639c47e","type":"SaveTool"},{"attributes":{},"id":"fc4ebabb-c94b-4634-8ccf-446f4be33f2a","type":"Selection"}],"root_ids":["aec416cf-b819-4572-90ef-3e0138604e2f"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"d3d6d9fb-7685-4f13-a903-67c00bcfdacb","roots":{"aec416cf-b819-4572-90ef-3e0138604e2f":"ddab34a2-ab3c-495c-be11-6c43d19c23ff"}}];
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