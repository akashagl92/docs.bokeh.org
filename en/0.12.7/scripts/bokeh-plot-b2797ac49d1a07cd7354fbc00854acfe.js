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
      };var element = document.getElementById("a24cac8d-34ec-4c84-9c3b-0d556bd91ced");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a24cac8d-34ec-4c84-9c3b-0d556bd91ced' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"00703ce1-ca9c-4886-ace5-4d081bc383d0":{"roots":{"references":[{"attributes":{"below":[{"id":"9eaa1669-d348-4abf-be29-ccc35a56dfc7","type":"LinearAxis"}],"left":[{"id":"d6e3e524-0df9-4eb4-9675-474ece08873f","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"9eaa1669-d348-4abf-be29-ccc35a56dfc7","type":"LinearAxis"},{"id":"4a2cf98f-d3fc-4cff-ac6b-0b35c139295e","type":"Grid"},{"id":"d6e3e524-0df9-4eb4-9675-474ece08873f","type":"LinearAxis"},{"id":"6d806e46-024e-43c2-ae5e-d5e9adc268e3","type":"Grid"},{"id":"c35114a9-2fa1-4c4c-ad86-a16cbb2c1b6b","type":"GlyphRenderer"}],"title":{"id":"6e295762-7056-4b1e-9f1b-3b3e8fe37494","type":"Title"},"toolbar":{"id":"0bfd6502-b09e-425d-bedb-cdbd1370ddf7","type":"Toolbar"},"x_range":{"id":"5875d6c7-c3dd-4f87-8583-11eb5264700e","type":"DataRange1d"},"x_scale":{"id":"24a63d78-d65f-4f46-a1aa-a00fea432100","type":"LinearScale"},"y_range":{"id":"e8c12d24-9ebe-442a-b6cf-f88b2f2a9b64","type":"DataRange1d"},"y_scale":{"id":"e94228fa-0a62-4209-a241-0a9fd9e911bf","type":"LinearScale"}},"id":"620676b6-9bff-47ff-8618-11b606f06935","subtype":"Figure","type":"Plot"},{"attributes":{"callback":{"id":"21f16bee-e7c4-4bd8-b804-798de043b3b5","type":"OpenURL"}},"id":"20fc4da2-2922-4ae4-9794-f25048744888","type":"TapTool"},{"attributes":{},"id":"b97b81c2-e7f7-4dc9-8697-e9f5c1cbc7b0","type":"BasicTicker"},{"attributes":{"plot":{"id":"620676b6-9bff-47ff-8618-11b606f06935","subtype":"Figure","type":"Plot"},"ticker":{"id":"b97b81c2-e7f7-4dc9-8697-e9f5c1cbc7b0","type":"BasicTicker"}},"id":"4a2cf98f-d3fc-4cff-ac6b-0b35c139295e","type":"Grid"},{"attributes":{},"id":"e94228fa-0a62-4209-a241-0a9fd9e911bf","type":"LinearScale"},{"attributes":{"callback":null,"column_names":["x","y","color"],"data":{"color":["navy","orange","olive","firebrick","gold"],"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"0f88d5c9-9b67-47b3-ac5c-62ca5985622d","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"5875d6c7-c3dd-4f87-8583-11eb5264700e","type":"DataRange1d"},{"attributes":{},"id":"b8281ed2-a3b7-426a-82b0-2fff70c9b2d2","type":"BasicTicker"},{"attributes":{"url":"http://www.colors.commutercreative.com/@color/"},"id":"21f16bee-e7c4-4bd8-b804-798de043b3b5","type":"OpenURL"},{"attributes":{"formatter":{"id":"89096109-ef56-4170-a856-46d17cda18e9","type":"BasicTickFormatter"},"plot":{"id":"620676b6-9bff-47ff-8618-11b606f06935","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8281ed2-a3b7-426a-82b0-2fff70c9b2d2","type":"BasicTicker"}},"id":"d6e3e524-0df9-4eb4-9675-474ece08873f","type":"LinearAxis"},{"attributes":{"plot":null,"text":"Click the Dots"},"id":"6e295762-7056-4b1e-9f1b-3b3e8fe37494","type":"Title"},{"attributes":{},"id":"24a63d78-d65f-4f46-a1aa-a00fea432100","type":"LinearScale"},{"attributes":{"data_source":{"id":"0f88d5c9-9b67-47b3-ac5c-62ca5985622d","type":"ColumnDataSource"},"glyph":{"id":"fc96262b-e4ea-48be-9659-ac9a59f249ed","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"b8f61fe2-6197-47ce-896f-4602b8ec48f9","type":"Circle"},"selection_glyph":null,"view":{"id":"bcfc4218-cb41-4e30-aa9b-74a8ceeb70e4","type":"CDSView"}},"id":"c35114a9-2fa1-4c4c-ad86-a16cbb2c1b6b","type":"GlyphRenderer"},{"attributes":{},"id":"e2b43721-4060-40ee-ade5-4f327ff94fab","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"0f88d5c9-9b67-47b3-ac5c-62ca5985622d","type":"ColumnDataSource"}},"id":"bcfc4218-cb41-4e30-aa9b-74a8ceeb70e4","type":"CDSView"},{"attributes":{"callback":null},"id":"e8c12d24-9ebe-442a-b6cf-f88b2f2a9b64","type":"DataRange1d"},{"attributes":{"dimension":1,"plot":{"id":"620676b6-9bff-47ff-8618-11b606f06935","subtype":"Figure","type":"Plot"},"ticker":{"id":"b8281ed2-a3b7-426a-82b0-2fff70c9b2d2","type":"BasicTicker"}},"id":"6d806e46-024e-43c2-ae5e-d5e9adc268e3","type":"Grid"},{"attributes":{},"id":"89096109-ef56-4170-a856-46d17cda18e9","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"20fc4da2-2922-4ae4-9794-f25048744888","type":"TapTool"}]},"id":"0bfd6502-b09e-425d-bedb-cdbd1370ddf7","type":"Toolbar"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"b8f61fe2-6197-47ce-896f-4602b8ec48f9","type":"Circle"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"size":{"units":"screen","value":20},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc96262b-e4ea-48be-9659-ac9a59f249ed","type":"Circle"},{"attributes":{"formatter":{"id":"e2b43721-4060-40ee-ade5-4f327ff94fab","type":"BasicTickFormatter"},"plot":{"id":"620676b6-9bff-47ff-8618-11b606f06935","subtype":"Figure","type":"Plot"},"ticker":{"id":"b97b81c2-e7f7-4dc9-8697-e9f5c1cbc7b0","type":"BasicTicker"}},"id":"9eaa1669-d348-4abf-be29-ccc35a56dfc7","type":"LinearAxis"}],"root_ids":["620676b6-9bff-47ff-8618-11b606f06935"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"00703ce1-ca9c-4886-ace5-4d081bc383d0","elementid":"a24cac8d-34ec-4c84-9c3b-0d556bd91ced","modelid":"620676b6-9bff-47ff-8618-11b606f06935"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
