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
      };var element = document.getElementById("91a0e7c3-36e3-44a0-ba1a-eb4169b9e0a0");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '91a0e7c3-36e3-44a0-ba1a-eb4169b9e0a0' but no matching script tag was found. ")
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
                var docs_json = {"050ccd2a-dfcf-440e-aeac-9c55b48440c2":{"roots":{"references":[{"attributes":{"plot":null,"text":""},"id":"ee682168-6fdf-4377-a936-45be26ff0893","type":"Title"},{"attributes":{"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"}},"id":"327411cc-e5dc-4c73-bfab-a5277c436375","type":"ResetTool"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":0.4},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ff7adec7-a1e5-4f1f-88f4-6faae1c9b973","type":"Oval"},{"attributes":{"angle":{"units":"rad","value":-0.7},"fill_color":{"value":"#1D91C0"},"height":{"units":"data","value":0.4},"line_color":{"value":"#1D91C0"},"width":{"units":"data","value":0.2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7e5156b0-a2cb-4d2d-87ca-fce25b8bc645","type":"Oval"},{"attributes":{},"id":"74606750-0c45-426c-bc3d-97220d510167","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"553693c5-d1da-4b73-a487-a980b762f9f0","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"86b22cd0-f7bf-4708-b106-2758b84aeba8","type":"LinearAxis"}],"left":[{"id":"c8d5785b-6062-4748-8a6b-a3bba1d3c830","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"86b22cd0-f7bf-4708-b106-2758b84aeba8","type":"LinearAxis"},{"id":"31dace3e-96fd-4b45-8338-74e9b21a2bcc","type":"Grid"},{"id":"c8d5785b-6062-4748-8a6b-a3bba1d3c830","type":"LinearAxis"},{"id":"92df488d-83de-4b81-be2e-64984bc836a7","type":"Grid"},{"id":"553693c5-d1da-4b73-a487-a980b762f9f0","type":"BoxAnnotation"},{"id":"89948725-671f-4edf-87f7-28efa7c70da6","type":"GlyphRenderer"}],"title":{"id":"ee682168-6fdf-4377-a936-45be26ff0893","type":"Title"},"tool_events":{"id":"74606750-0c45-426c-bc3d-97220d510167","type":"ToolEvents"},"toolbar":{"id":"2d640927-be0f-45ca-a46a-9bb98e121198","type":"Toolbar"},"x_range":{"id":"4115ef5d-528f-4273-8713-4a53d52ae07e","type":"DataRange1d"},"y_range":{"id":"b69847dc-3f77-45b4-b144-775051ab2051","type":"DataRange1d"}},"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"b69847dc-3f77-45b4-b144-775051ab2051","type":"DataRange1d"},{"attributes":{"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"}},"id":"b346337a-10af-4701-a662-1d75b9f53e8a","type":"HelpTool"},{"attributes":{"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"}},"id":"4e861e68-9a52-4870-95cf-54920a0859c0","type":"PanTool"},{"attributes":{},"id":"e095dc32-1f27-4f5a-8dbf-93adfa1aa0df","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"0abbe14a-ff49-46a2-8e4b-5d7716df6215","type":"ColumnDataSource"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4e861e68-9a52-4870-95cf-54920a0859c0","type":"PanTool"},{"id":"79288809-c8e2-4831-b63b-5ab432d11e7b","type":"WheelZoomTool"},{"id":"dd5dbdcb-360a-4aba-b6c6-0e4532f65808","type":"BoxZoomTool"},{"id":"a364265d-0690-47c4-96cf-4beaecda2b4c","type":"SaveTool"},{"id":"327411cc-e5dc-4c73-bfab-a5277c436375","type":"ResetTool"},{"id":"b346337a-10af-4701-a662-1d75b9f53e8a","type":"HelpTool"}]},"id":"2d640927-be0f-45ca-a46a-9bb98e121198","type":"Toolbar"},{"attributes":{"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"}},"id":"a364265d-0690-47c4-96cf-4beaecda2b4c","type":"SaveTool"},{"attributes":{},"id":"047e6076-7622-436c-95f6-1f1c36fda3d6","type":"BasicTickFormatter"},{"attributes":{},"id":"40fa9bd3-c03c-433a-8ece-7e1d7a17ef56","type":"BasicTickFormatter"},{"attributes":{"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"}},"id":"79288809-c8e2-4831-b63b-5ab432d11e7b","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"0abbe14a-ff49-46a2-8e4b-5d7716df6215","type":"ColumnDataSource"},"glyph":{"id":"7e5156b0-a2cb-4d2d-87ca-fce25b8bc645","type":"Oval"},"hover_glyph":null,"nonselection_glyph":{"id":"ff7adec7-a1e5-4f1f-88f4-6faae1c9b973","type":"Oval"},"selection_glyph":null},"id":"89948725-671f-4edf-87f7-28efa7c70da6","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"40fa9bd3-c03c-433a-8ece-7e1d7a17ef56","type":"BasicTickFormatter"},"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"},"ticker":{"id":"e095dc32-1f27-4f5a-8dbf-93adfa1aa0df","type":"BasicTicker"}},"id":"c8d5785b-6062-4748-8a6b-a3bba1d3c830","type":"LinearAxis"},{"attributes":{"dimension":1,"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"},"ticker":{"id":"e095dc32-1f27-4f5a-8dbf-93adfa1aa0df","type":"BasicTicker"}},"id":"92df488d-83de-4b81-be2e-64984bc836a7","type":"Grid"},{"attributes":{},"id":"78c9cdbc-e298-474c-a376-9290ca166238","type":"BasicTicker"},{"attributes":{"callback":null},"id":"4115ef5d-528f-4273-8713-4a53d52ae07e","type":"DataRange1d"},{"attributes":{"formatter":{"id":"047e6076-7622-436c-95f6-1f1c36fda3d6","type":"BasicTickFormatter"},"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"},"ticker":{"id":"78c9cdbc-e298-474c-a376-9290ca166238","type":"BasicTicker"}},"id":"86b22cd0-f7bf-4708-b106-2758b84aeba8","type":"LinearAxis"},{"attributes":{"overlay":{"id":"553693c5-d1da-4b73-a487-a980b762f9f0","type":"BoxAnnotation"},"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"}},"id":"dd5dbdcb-360a-4aba-b6c6-0e4532f65808","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"93856792-e4a7-4330-9550-499f439d2814","subtype":"Figure","type":"Plot"},"ticker":{"id":"78c9cdbc-e298-474c-a376-9290ca166238","type":"BasicTicker"}},"id":"31dace3e-96fd-4b45-8338-74e9b21a2bcc","type":"Grid"}],"root_ids":["93856792-e4a7-4330-9550-499f439d2814"]},"title":"Bokeh Application","version":"0.12.4.10733"}};
                var render_items = [{"docid":"050ccd2a-dfcf-440e-aeac-9c55b48440c2","elementid":"91a0e7c3-36e3-44a0-ba1a-eb4169b9e0a0","modelid":"93856792-e4a7-4330-9550-499f439d2814"}];
                
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
