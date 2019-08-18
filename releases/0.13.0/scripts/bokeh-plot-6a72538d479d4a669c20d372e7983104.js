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
      };var element = document.getElementById("59d77450-744c-4a5b-a920-17063c4962ee");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '59d77450-744c-4a5b-a920-17063c4962ee' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"b96ab15f-6af7-4b2c-b7c9-f2a8e7c7392b":{"roots":{"references":[{"attributes":{},"id":"f10abe05-0215-4f11-96df-59bd6b37e195","type":"PanTool"},{"attributes":{"source":{"id":"4e6612a2-f6c9-493c-a73a-449e262b0c12","type":"ColumnDataSource"}},"id":"b2785d2c-c925-4254-bff9-b4f2cc1e3e46","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"45159c7b-38ac-4959-abce-e8b053eedc8a","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":[1,2,3],"y":[1,2,3]},"selected":{"id":"3d0ba84f-e43c-4c74-8d0b-152066794750","type":"Selection"},"selection_policy":{"id":"a8f9a3a0-1ad9-4a75-92a9-f2e6cc6b56f6","type":"UnionRenderers"}},"id":"4e6612a2-f6c9-493c-a73a-449e262b0c12","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"9d8942b4-f52e-418c-8546-deba461b44ca","type":"LinearAxis"}],"left":[{"id":"87352dc9-b6e6-4e63-95b5-c9a909758b54","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9d8942b4-f52e-418c-8546-deba461b44ca","type":"LinearAxis"},{"id":"31edf91b-d672-4516-8db5-8c4f9d0bf9d8","type":"Grid"},{"id":"87352dc9-b6e6-4e63-95b5-c9a909758b54","type":"LinearAxis"},{"id":"1756003c-1a0a-4d66-9ee7-f0f4367ccf3c","type":"Grid"},{"id":"45159c7b-38ac-4959-abce-e8b053eedc8a","type":"BoxAnnotation"},{"id":"f9c6cf9a-a34a-40c2-ba7e-097a380f2859","type":"GlyphRenderer"}],"title":{"id":"d4c6a51d-79a9-4362-9945-ba7421f80e5b","type":"Title"},"toolbar":{"id":"e9103c07-7379-4274-8024-0ff594623ecb","type":"Toolbar"},"x_range":{"id":"51fd5441-8468-4b0d-ad0e-8db9b45b5bd5","type":"DataRange1d"},"x_scale":{"id":"2be97075-d1fc-42ff-a809-4cde519f6d40","type":"LinearScale"},"y_range":{"id":"9c784975-fca4-4708-94de-afa91e502d86","type":"DataRange1d"},"y_scale":{"id":"262e456a-679e-4703-8de1-d452dff31942","type":"LinearScale"}},"id":"8a66e4a5-3743-4914-b777-9bc7a850e305","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"61b92529-fb5c-422e-8701-2b1bff47c6b9","type":"WheelZoomTool"},{"attributes":{},"id":"1b3ad98c-bdc9-4f15-9516-d065547f6dde","type":"HelpTool"},{"attributes":{},"id":"3d0ba84f-e43c-4c74-8d0b-152066794750","type":"Selection"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"f10abe05-0215-4f11-96df-59bd6b37e195","type":"PanTool"},{"id":"61b92529-fb5c-422e-8701-2b1bff47c6b9","type":"WheelZoomTool"},{"id":"47fcb8bb-5dd9-47ec-84dc-769cddd2d741","type":"BoxZoomTool"},{"id":"1802d4f3-2520-490b-b045-9f308268795d","type":"SaveTool"},{"id":"47f8d5b2-7690-4f6d-8c65-18ab6357cf1c","type":"ResetTool"},{"id":"1b3ad98c-bdc9-4f15-9516-d065547f6dde","type":"HelpTool"}]},"id":"e9103c07-7379-4274-8024-0ff594623ecb","type":"Toolbar"},{"attributes":{"overlay":{"id":"45159c7b-38ac-4959-abce-e8b053eedc8a","type":"BoxAnnotation"}},"id":"47fcb8bb-5dd9-47ec-84dc-769cddd2d741","type":"BoxZoomTool"},{"attributes":{},"id":"47f8d5b2-7690-4f6d-8c65-18ab6357cf1c","type":"ResetTool"},{"attributes":{"formatter":{"id":"044265ce-dd15-402c-9528-95c2404acd71","type":"BasicTickFormatter"},"plot":{"id":"8a66e4a5-3743-4914-b777-9bc7a850e305","subtype":"Figure","type":"Plot"},"ticker":{"id":"95c0b4c1-16cd-4607-b68e-f9c631716d6b","type":"BasicTicker"}},"id":"9d8942b4-f52e-418c-8546-deba461b44ca","type":"LinearAxis"},{"attributes":{},"id":"7fa88c58-b213-4202-806d-dc2aa18bfd09","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"51fd5441-8468-4b0d-ad0e-8db9b45b5bd5","type":"DataRange1d"},{"attributes":{},"id":"1802d4f3-2520-490b-b045-9f308268795d","type":"SaveTool"},{"attributes":{"plot":{"id":"8a66e4a5-3743-4914-b777-9bc7a850e305","subtype":"Figure","type":"Plot"},"ticker":{"id":"95c0b4c1-16cd-4607-b68e-f9c631716d6b","type":"BasicTicker"}},"id":"31edf91b-d672-4516-8db5-8c4f9d0bf9d8","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7773988-1789-4d81-826a-5c2f73678e21","type":"Annulus"},{"attributes":{},"id":"a8f9a3a0-1ad9-4a75-92a9-f2e6cc6b56f6","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"9c784975-fca4-4708-94de-afa91e502d86","type":"DataRange1d"},{"attributes":{},"id":"2be97075-d1fc-42ff-a809-4cde519f6d40","type":"LinearScale"},{"attributes":{},"id":"262e456a-679e-4703-8de1-d452dff31942","type":"LinearScale"},{"attributes":{},"id":"95c0b4c1-16cd-4607-b68e-f9c631716d6b","type":"BasicTicker"},{"attributes":{"formatter":{"id":"7fa88c58-b213-4202-806d-dc2aa18bfd09","type":"BasicTickFormatter"},"plot":{"id":"8a66e4a5-3743-4914-b777-9bc7a850e305","subtype":"Figure","type":"Plot"},"ticker":{"id":"b080ba00-87bd-4298-b664-35480aa74f99","type":"BasicTicker"}},"id":"87352dc9-b6e6-4e63-95b5-c9a909758b54","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"d4c6a51d-79a9-4362-9945-ba7421f80e5b","type":"Title"},{"attributes":{},"id":"b080ba00-87bd-4298-b664-35480aa74f99","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"8a66e4a5-3743-4914-b777-9bc7a850e305","subtype":"Figure","type":"Plot"},"ticker":{"id":"b080ba00-87bd-4298-b664-35480aa74f99","type":"BasicTicker"}},"id":"1756003c-1a0a-4d66-9ee7-f0f4367ccf3c","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.6},"fill_color":{"value":"orange"},"inner_radius":{"units":"data","value":0.1},"line_alpha":{"value":0.6},"line_color":{"value":"orange"},"outer_radius":{"units":"data","value":0.25},"x":{"field":"x"},"y":{"field":"y"}},"id":"1e0c9bb4-a6e3-431d-890b-2ea0140a318a","type":"Annulus"},{"attributes":{"data_source":{"id":"4e6612a2-f6c9-493c-a73a-449e262b0c12","type":"ColumnDataSource"},"glyph":{"id":"1e0c9bb4-a6e3-431d-890b-2ea0140a318a","type":"Annulus"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"f7773988-1789-4d81-826a-5c2f73678e21","type":"Annulus"},"selection_glyph":null,"view":{"id":"b2785d2c-c925-4254-bff9-b4f2cc1e3e46","type":"CDSView"}},"id":"f9c6cf9a-a34a-40c2-ba7e-097a380f2859","type":"GlyphRenderer"},{"attributes":{},"id":"044265ce-dd15-402c-9528-95c2404acd71","type":"BasicTickFormatter"}],"root_ids":["8a66e4a5-3743-4914-b777-9bc7a850e305"]},"title":"Bokeh Application","version":"0.13.0"}}';
                  var render_items = [{"docid":"b96ab15f-6af7-4b2c-b7c9-f2a8e7c7392b","roots":{"8a66e4a5-3743-4914-b777-9bc7a850e305":"59d77450-744c-4a5b-a920-17063c4962ee"}}];
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