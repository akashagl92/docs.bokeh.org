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
      };var element = document.getElementById("bf8d6742-ca18-4aa6-ab97-1e4f3634ff9d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'bf8d6742-ca18-4aa6-ab97-1e4f3634ff9d' but no matching script tag was found. ")
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
                var docs_json = {"4cc44bd5-c8df-4e11-ad63-2c003b80a856":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d3195679-3876-4cf4-adbd-650a4baa2070","type":"SaveTool"}]},"id":"fe56bca9-6901-4a81-a6a9-279a2da44d19","type":"Toolbar"},{"attributes":{"source":{"id":"fb026eb2-06c5-4b97-9910-369cd30c3b24","type":"ColumnDataSource"}},"id":"ed20e10b-e3f3-4bc1-9242-41ee02ea3b34","type":"CDSView"},{"attributes":{"callback":null,"end":7},"id":"541da97f-d551-4be2-8b04-62521ed5f69b","type":"Range1d"},{"attributes":{},"id":"d3195679-3876-4cf4-adbd-650a4baa2070","type":"SaveTool"},{"attributes":{"plot":null,"text":""},"id":"8ef1b5a9-abe4-43ed-8c60-84f8bc17431b","type":"Title"},{"attributes":{"callback":null,"end":3},"id":"86dade6f-c6ff-4aa6-8272-4b391b5cd561","type":"Range1d"},{"attributes":{},"id":"3ad101f6-f9ff-41f5-a37d-db3d4fa27915","type":"BasicTicker"},{"attributes":{},"id":"37d9d3eb-de5d-4812-b71c-e2b4e836112c","type":"LinearScale"},{"attributes":{"formatter":{"id":"ea693f17-8b8e-4ff0-a1f0-cbcbf11d2ef5","type":"BasicTickFormatter"},"plot":{"id":"989b0ccd-5b86-477e-9cf6-5f3f5b2094dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ad101f6-f9ff-41f5-a37d-db3d4fa27915","type":"BasicTicker"}},"id":"aacde9fe-e185-4f66-9f11-6ebc2039239f","type":"LinearAxis"},{"attributes":{},"id":"54116e79-e59a-4f01-8542-a480cab5f7e9","type":"LinearScale"},{"attributes":{"items":[{"id":"84bfd1f2-a3e7-422d-a683-931300e63818","type":"LegendItem"}],"plot":{"id":"989b0ccd-5b86-477e-9cf6-5f3f5b2094dd","subtype":"Figure","type":"Plot"}},"id":"58092aae-5509-40e5-935a-301abada313a","type":"Legend"},{"attributes":{"plot":{"id":"989b0ccd-5b86-477e-9cf6-5f3f5b2094dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"3ad101f6-f9ff-41f5-a37d-db3d4fa27915","type":"BasicTicker"}},"id":"00c9ae39-d132-49f1-be5c-7bfdd8683713","type":"Grid"},{"attributes":{"label":{"field":"label"},"renderers":[{"id":"233d6aee-b0f4-4f74-ae3e-cfdb31c5a6b9","type":"GlyphRenderer"}]},"id":"84bfd1f2-a3e7-422d-a683-931300e63818","type":"LegendItem"},{"attributes":{"formatter":{"id":"fcaeaf84-027a-4362-858d-fc61e2f45e1d","type":"BasicTickFormatter"},"plot":{"id":"989b0ccd-5b86-477e-9cf6-5f3f5b2094dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b93230eb-1c42-4856-aafa-afe3b3b057fa","type":"BasicTicker"}},"id":"22dd433f-f927-42a6-b0a8-121aea6162c2","type":"LinearAxis"},{"attributes":{},"id":"ea693f17-8b8e-4ff0-a1f0-cbcbf11d2ef5","type":"BasicTickFormatter"},{"attributes":{},"id":"b93230eb-1c42-4856-aafa-afe3b3b057fa","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"271f50eb-7376-47d2-9a60-8e3d9dff6504","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"989b0ccd-5b86-477e-9cf6-5f3f5b2094dd","subtype":"Figure","type":"Plot"},"ticker":{"id":"b93230eb-1c42-4856-aafa-afe3b3b057fa","type":"BasicTicker"}},"id":"2e5e4655-fab4-4d8d-8c9a-3aa5467c2ca1","type":"Grid"},{"attributes":{"fill_color":{"field":"color"},"line_color":{"field":"color"},"radius":{"units":"data","value":0.5},"x":{"field":"x"},"y":{"field":"y"}},"id":"3c8b714c-311d-4109-ad3a-232d25f1d0ae","type":"Circle"},{"attributes":{},"id":"fcaeaf84-027a-4362-858d-fc61e2f45e1d","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["x","y","color","label"],"data":{"color":["#ef8a62","#67a9cf","#ef8a62","#67a9cf","#ef8a62","#67a9cf"],"label":["hi","lo","hi","lo","hi","lo"],"x":[1,2,3,4,5,6],"y":[2,1,2,1,2,1]}},"id":"fb026eb2-06c5-4b97-9910-369cd30c3b24","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"aacde9fe-e185-4f66-9f11-6ebc2039239f","type":"LinearAxis"}],"left":[{"id":"22dd433f-f927-42a6-b0a8-121aea6162c2","type":"LinearAxis"}],"plot_height":300,"renderers":[{"id":"aacde9fe-e185-4f66-9f11-6ebc2039239f","type":"LinearAxis"},{"id":"00c9ae39-d132-49f1-be5c-7bfdd8683713","type":"Grid"},{"id":"22dd433f-f927-42a6-b0a8-121aea6162c2","type":"LinearAxis"},{"id":"2e5e4655-fab4-4d8d-8c9a-3aa5467c2ca1","type":"Grid"},{"id":"58092aae-5509-40e5-935a-301abada313a","type":"Legend"},{"id":"233d6aee-b0f4-4f74-ae3e-cfdb31c5a6b9","type":"GlyphRenderer"}],"title":{"id":"8ef1b5a9-abe4-43ed-8c60-84f8bc17431b","type":"Title"},"toolbar":{"id":"fe56bca9-6901-4a81-a6a9-279a2da44d19","type":"Toolbar"},"x_range":{"id":"541da97f-d551-4be2-8b04-62521ed5f69b","type":"Range1d"},"x_scale":{"id":"37d9d3eb-de5d-4812-b71c-e2b4e836112c","type":"LinearScale"},"y_range":{"id":"86dade6f-c6ff-4aa6-8272-4b391b5cd561","type":"Range1d"},"y_scale":{"id":"54116e79-e59a-4f01-8542-a480cab5f7e9","type":"LinearScale"}},"id":"989b0ccd-5b86-477e-9cf6-5f3f5b2094dd","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"fb026eb2-06c5-4b97-9910-369cd30c3b24","type":"ColumnDataSource"},"glyph":{"id":"3c8b714c-311d-4109-ad3a-232d25f1d0ae","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"271f50eb-7376-47d2-9a60-8e3d9dff6504","type":"Circle"},"selection_glyph":null,"view":{"id":"ed20e10b-e3f3-4bc1-9242-41ee02ea3b34","type":"CDSView"}},"id":"233d6aee-b0f4-4f74-ae3e-cfdb31c5a6b9","type":"GlyphRenderer"}],"root_ids":["989b0ccd-5b86-477e-9cf6-5f3f5b2094dd"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"4cc44bd5-c8df-4e11-ad63-2c003b80a856","elementid":"bf8d6742-ca18-4aa6-ab97-1e4f3634ff9d","modelid":"989b0ccd-5b86-477e-9cf6-5f3f5b2094dd"}];
                
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
