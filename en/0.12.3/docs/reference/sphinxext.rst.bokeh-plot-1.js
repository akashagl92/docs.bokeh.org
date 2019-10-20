document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
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
      };var element = document.getElementById("3756904f-035c-466d-88af-fe37749aacbf");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '3756904f-035c-466d-88af-fe37749aacbf' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"0e371662-68bf-43e0-836c-d65810a5285a":{"roots":{"references":[{"attributes":{"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"}},"id":"45dd68e7-6087-49c2-b765-72f428778a88","type":"ResetTool"},{"attributes":{"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"}},"id":"dea23e17-5a6d-4a2d-a02e-dfc10162b774","type":"PanTool"},{"attributes":{"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"}},"id":"cfcdb760-de3e-45c3-87c8-9dcf3cf03648","type":"WheelZoomTool"},{"attributes":{"below":[{"id":"072ca2a7-686a-4d83-8a17-15b1950d2a72","type":"LinearAxis"}],"left":[{"id":"66a4db3f-1b87-402b-b34d-08bb1b365503","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"072ca2a7-686a-4d83-8a17-15b1950d2a72","type":"LinearAxis"},{"id":"69c98f7b-f139-4b7f-957b-074a27f3da9c","type":"Grid"},{"id":"66a4db3f-1b87-402b-b34d-08bb1b365503","type":"LinearAxis"},{"id":"509da71f-fa8b-4b34-99a9-2c2155d1074b","type":"Grid"},{"id":"da29c9cc-77cf-43fe-8fc4-61516b58bf16","type":"BoxAnnotation"},{"id":"193ca3f8-3d20-4ebe-9611-ea76f533d914","type":"GlyphRenderer"},{"id":"e520da59-4c98-4775-840a-729827c4f8c5","type":"GlyphRenderer"}],"title":{"id":"81172236-8b0d-4429-91f6-4f3d216347a5","type":"Title"},"tool_events":{"id":"d3cfaaa4-a965-4966-aea8-cd3bd292e97f","type":"ToolEvents"},"toolbar":{"id":"1cdc6dfc-ea5f-4d5f-b67e-ae8483674a0d","type":"Toolbar"},"x_range":{"id":"96176c82-5112-496c-b2f6-aee367250480","type":"DataRange1d"},"y_range":{"id":"204ea641-fd0b-4297-94a4-21a6f6a967cc","type":"DataRange1d"}},"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6b713fb0-07d0-4ac7-a781-34309a976325","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c36deb49-dc4a-45e7-8c8f-6681d7e7753a","type":"BasicTicker"}},"id":"69c98f7b-f139-4b7f-957b-074a27f3da9c","type":"Grid"},{"attributes":{},"id":"cdf50868-08d2-4611-97bd-c008c7ce8df3","type":"BasicTicker"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7ed19995-86bf-4020-8e82-2de697a1dea3","type":"Line"},{"attributes":{"formatter":{"id":"20890e0d-3f3e-486e-97af-4404ff980277","type":"BasicTickFormatter"},"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"c36deb49-dc4a-45e7-8c8f-6681d7e7753a","type":"BasicTicker"}},"id":"072ca2a7-686a-4d83-8a17-15b1950d2a72","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"da29c9cc-77cf-43fe-8fc4-61516b58bf16","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"}},"id":"e609ca9a-3a95-42bc-a366-3f5148b8bfa3","type":"SaveTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"61fb0f37-39ad-4871-9e88-f6ae0a090cf2","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"dea23e17-5a6d-4a2d-a02e-dfc10162b774","type":"PanTool"},{"id":"cfcdb760-de3e-45c3-87c8-9dcf3cf03648","type":"WheelZoomTool"},{"id":"d5ea8a8a-609e-4d99-843e-6907c8072aa4","type":"BoxZoomTool"},{"id":"e609ca9a-3a95-42bc-a366-3f5148b8bfa3","type":"SaveTool"},{"id":"45dd68e7-6087-49c2-b765-72f428778a88","type":"ResetTool"},{"id":"4ae0e297-8770-4705-974f-75b9f83e9099","type":"HelpTool"}]},"id":"1cdc6dfc-ea5f-4d5f-b67e-ae8483674a0d","type":"Toolbar"},{"attributes":{"callback":null},"id":"96176c82-5112-496c-b2f6-aee367250480","type":"DataRange1d"},{"attributes":{"callback":null},"id":"204ea641-fd0b-4297-94a4-21a6f6a967cc","type":"DataRange1d"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"e5efefbe-3aee-4e7a-b8a3-e05633c91fa2","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"a7d1df21-c780-4007-b08d-1ef3abb2cd4b","type":"Line"},{"attributes":{"plot":null,"text":"example"},"id":"81172236-8b0d-4429-91f6-4f3d216347a5","type":"Title"},{"attributes":{},"id":"c36deb49-dc4a-45e7-8c8f-6681d7e7753a","type":"BasicTicker"},{"attributes":{"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"}},"id":"4ae0e297-8770-4705-974f-75b9f83e9099","type":"HelpTool"},{"attributes":{},"id":"d3cfaaa4-a965-4966-aea8-cd3bd292e97f","type":"ToolEvents"},{"attributes":{"data_source":{"id":"76ef37e8-d0e5-464f-979b-525627ba9ab5","type":"ColumnDataSource"},"glyph":{"id":"a7d1df21-c780-4007-b08d-1ef3abb2cd4b","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"7ed19995-86bf-4020-8e82-2de697a1dea3","type":"Line"},"selection_glyph":null},"id":"193ca3f8-3d20-4ebe-9611-ea76f533d914","type":"GlyphRenderer"},{"attributes":{},"id":"20890e0d-3f3e-486e-97af-4404ff980277","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdf50868-08d2-4611-97bd-c008c7ce8df3","type":"BasicTicker"}},"id":"509da71f-fa8b-4b34-99a9-2c2155d1074b","type":"Grid"},{"attributes":{"formatter":{"id":"6b713fb0-07d0-4ac7-a781-34309a976325","type":"BasicTickFormatter"},"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"},"ticker":{"id":"cdf50868-08d2-4611-97bd-c008c7ce8df3","type":"BasicTicker"}},"id":"66a4db3f-1b87-402b-b34d-08bb1b365503","type":"LinearAxis"},{"attributes":{"overlay":{"id":"da29c9cc-77cf-43fe-8fc4-61516b58bf16","type":"BoxAnnotation"},"plot":{"id":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d","subtype":"Figure","type":"Plot"}},"id":"d5ea8a8a-609e-4d99-843e-6907c8072aa4","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3,4,5],"y":[6,7,6,4,5]}},"id":"76ef37e8-d0e5-464f-979b-525627ba9ab5","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"white"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"437e3724-31f1-4149-95bb-7afec5c21b10","type":"Circle"},{"attributes":{"data_source":{"id":"e5efefbe-3aee-4e7a-b8a3-e05633c91fa2","type":"ColumnDataSource"},"glyph":{"id":"437e3724-31f1-4149-95bb-7afec5c21b10","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"61fb0f37-39ad-4871-9e88-f6ae0a090cf2","type":"Circle"},"selection_glyph":null},"id":"e520da59-4c98-4775-840a-729827c4f8c5","type":"GlyphRenderer"}],"root_ids":["74f56b96-5a0b-44a7-b5eb-309c0b92c90d"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"0e371662-68bf-43e0-836c-d65810a5285a","elementid":"3756904f-035c-466d-88af-fe37749aacbf","modelid":"74f56b96-5a0b-44a7-b5eb-309c0b92c90d"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});