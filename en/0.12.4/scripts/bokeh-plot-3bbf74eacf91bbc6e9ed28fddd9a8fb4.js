(function() {
  var fn = function() {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force === true) {
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
      };var element = document.getElementById("70bbe31a-08f0-4205-b630-15b4d1375598");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '70bbe31a-08f0-4205-b630-15b4d1375598' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                var docs_json = {"02ae8776-d2d5-4206-8279-757e519528e9":{"roots":{"references":[{"attributes":{"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"}},"id":"4fb6bceb-5715-49d2-adbb-20535b1cb870","type":"SaveTool"},{"attributes":{"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"}},"id":"1524665b-7b42-4a68-a75e-33c3774d4de9","type":"WheelZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"75d3a009-4bb3-42ce-831a-4ff758974bd9","type":"BasicTicker"}},"id":"4f5c15c9-93a0-4977-b07b-d2079e988ae4","type":"Grid"},{"attributes":{"formatter":{"id":"73b7873b-a386-4d7a-9dd1-7457d1fd2782","type":"BasicTickFormatter"},"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"75d3a009-4bb3-42ce-831a-4ff758974bd9","type":"BasicTicker"}},"id":"b65ba4fb-164c-4846-9d7e-facab38dbbd1","type":"LinearAxis"},{"attributes":{},"id":"75d3a009-4bb3-42ce-831a-4ff758974bd9","type":"BasicTicker"},{"attributes":{"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"fe48ecae-fa1a-49d7-88ce-dc61ccf955ea","type":"BasicTicker"}},"id":"0cf54c16-4498-4f40-9486-21ebe3828368","type":"Grid"},{"attributes":{"callback":null},"id":"0470e700-4386-4433-b55d-19447963b524","type":"DataRange1d"},{"attributes":{"overlay":{"id":"aef59662-b74b-4e81-b06e-9be6d9c3bf01","type":"BoxAnnotation"},"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"}},"id":"bae6a00a-c37d-40e1-b559-f059ba899692","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3df8db85-13e1-48b0-ba74-527e79432220","type":"Circle"},{"attributes":{"plot":null,"text":""},"id":"f0039320-d246-4d8b-b837-460a766ce099","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"8ae47d0d-c7af-438f-930c-07d28aaa1f6c","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"77fd9bf4-f074-4fe8-b866-797b3cb84244","type":"BasicTickFormatter"},"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"},"ticker":{"id":"23fe749b-dc5a-431c-8db2-5b41b910fa7c","type":"FixedTicker"}},"id":"e47a7f08-7214-4086-bf7e-8d7dfb9526a4","type":"LinearAxis"},{"attributes":{},"id":"73b7873b-a386-4d7a-9dd1-7457d1fd2782","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"ba9fe4ed-38ce-489e-aa91-ac36b757052d","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"13853cdc-4add-41ac-8c4a-b70dba064d9c","type":"PanTool"},{"id":"1524665b-7b42-4a68-a75e-33c3774d4de9","type":"WheelZoomTool"},{"id":"bae6a00a-c37d-40e1-b559-f059ba899692","type":"BoxZoomTool"},{"id":"4fb6bceb-5715-49d2-adbb-20535b1cb870","type":"SaveTool"},{"id":"2964c76c-9324-4963-accd-2398aa023155","type":"ResetTool"},{"id":"425a7b9a-4f9c-4a52-b022-562054bd3a89","type":"HelpTool"}]},"id":"1e38fbe7-b568-45c2-91aa-90f327cf5a8f","type":"Toolbar"},{"attributes":{"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"}},"id":"13853cdc-4add-41ac-8c4a-b70dba064d9c","type":"PanTool"},{"attributes":{},"id":"d11714b2-7f6f-479b-b6c5-a7d3c2721c52","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"aef59662-b74b-4e81-b06e-9be6d9c3bf01","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"}},"id":"425a7b9a-4f9c-4a52-b022-562054bd3a89","type":"HelpTool"},{"attributes":{"plot":{"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"}},"id":"2964c76c-9324-4963-accd-2398aa023155","type":"ResetTool"},{"attributes":{},"id":"fe48ecae-fa1a-49d7-88ce-dc61ccf955ea","type":"BasicTicker"},{"attributes":{"data_source":{"id":"8ae47d0d-c7af-438f-930c-07d28aaa1f6c","type":"ColumnDataSource"},"glyph":{"id":"3df8db85-13e1-48b0-ba74-527e79432220","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"74cd5278-8a38-45a3-8405-4f060039f887","type":"Circle"},"selection_glyph":null},"id":"e33fa836-8a5f-495e-8b44-d61af0a2e3b5","type":"GlyphRenderer"},{"attributes":{"ticks":[2,3.5,4]},"id":"23fe749b-dc5a-431c-8db2-5b41b910fa7c","type":"FixedTicker"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"74cd5278-8a38-45a3-8405-4f060039f887","type":"Circle"},{"attributes":{},"id":"77fd9bf4-f074-4fe8-b866-797b3cb84244","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"e47a7f08-7214-4086-bf7e-8d7dfb9526a4","type":"LinearAxis"}],"left":[{"id":"b65ba4fb-164c-4846-9d7e-facab38dbbd1","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"e47a7f08-7214-4086-bf7e-8d7dfb9526a4","type":"LinearAxis"},{"id":"0cf54c16-4498-4f40-9486-21ebe3828368","type":"Grid"},{"id":"b65ba4fb-164c-4846-9d7e-facab38dbbd1","type":"LinearAxis"},{"id":"4f5c15c9-93a0-4977-b07b-d2079e988ae4","type":"Grid"},{"id":"aef59662-b74b-4e81-b06e-9be6d9c3bf01","type":"BoxAnnotation"},{"id":"e33fa836-8a5f-495e-8b44-d61af0a2e3b5","type":"GlyphRenderer"}],"title":{"id":"f0039320-d246-4d8b-b837-460a766ce099","type":"Title"},"tool_events":{"id":"d11714b2-7f6f-479b-b6c5-a7d3c2721c52","type":"ToolEvents"},"toolbar":{"id":"1e38fbe7-b568-45c2-91aa-90f327cf5a8f","type":"Toolbar"},"x_range":{"id":"0470e700-4386-4433-b55d-19447963b524","type":"DataRange1d"},"y_range":{"id":"ba9fe4ed-38ce-489e-aa91-ac36b757052d","type":"DataRange1d"}},"id":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44","subtype":"Figure","type":"Plot"}],"root_ids":["fdcfb98d-d9ec-41d2-b7c3-b04742390c44"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"02ae8776-d2d5-4206-8279-757e519528e9","elementid":"70bbe31a-08f0-4205-b630-15b4d1375598","modelid":"fdcfb98d-d9ec-41d2-b7c3-b04742390c44"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.4.min.css");
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
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();
