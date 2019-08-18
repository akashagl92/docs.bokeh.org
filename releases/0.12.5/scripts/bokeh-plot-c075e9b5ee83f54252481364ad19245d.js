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
      };var element = document.getElementById("8abe3f5c-ae1c-4a0b-9f4b-cbc43f5d79f9");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8abe3f5c-ae1c-4a0b-9f4b-cbc43f5d79f9' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.js"];
    
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
                var docs_json = {"e5d7b87b-bd04-48b6-aef5-9054e5ac3ee3":{"roots":{"references":[{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[2,5,8,2,7]}},"id":"f6314c14-c8c1-4806-a1f2-4ce2b34e0156","type":"ColumnDataSource"},{"attributes":{"dimension":1,"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"293dfee0-3400-4deb-bf5e-5a08ba84243b","type":"BasicTicker"}},"id":"17a6b1ce-25c5-4300-a543-6a5659de65a6","type":"Grid"},{"attributes":{"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"}},"id":"029bb0d3-08f0-4924-94ad-8e2c362ead5f","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"27602724-b1c0-4a52-a1d8-c39c5132aa71","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"d6e5122e-bbf0-40e7-ac7b-7d11a37ae126","type":"PanTool"},{"id":"029bb0d3-08f0-4924-94ad-8e2c362ead5f","type":"WheelZoomTool"},{"id":"eaaa0f95-d42e-4b10-b6ef-2f24c9e29108","type":"BoxZoomTool"},{"id":"05b3007f-e8bc-4ad5-9519-82de89bb75b1","type":"SaveTool"},{"id":"98e2824d-7b18-42e7-b6d0-d06b6b71640b","type":"ResetTool"},{"id":"8fa91927-d5e3-4f97-938c-3a208d321231","type":"HelpTool"}]},"id":"54f320d0-6746-48f8-a493-86a4b15eda87","type":"Toolbar"},{"attributes":{},"id":"293dfee0-3400-4deb-bf5e-5a08ba84243b","type":"BasicTicker"},{"attributes":{"callback":null},"id":"a3615e91-dc25-489c-a9bf-602a42af25ef","type":"DataRange1d"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"c4bd04a4-bac3-485f-89b6-1c4aa3edda57","type":"BoxAnnotation"},{"attributes":{},"id":"65225147-fea2-483d-aa0e-525b4f38cfef","type":"BasicTicker"},{"attributes":{},"id":"5f0eff2d-2bae-4ee1-91b0-eadd8e0be8c3","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"c4bd04a4-bac3-485f-89b6-1c4aa3edda57","type":"BoxAnnotation"},"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"}},"id":"eaaa0f95-d42e-4b10-b6ef-2f24c9e29108","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"}},"id":"05b3007f-e8bc-4ad5-9519-82de89bb75b1","type":"SaveTool"},{"attributes":{"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"65225147-fea2-483d-aa0e-525b4f38cfef","type":"BasicTicker"}},"id":"b9764799-1635-4871-a1da-9c0bda255788","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"f7cb3238-eacb-4fc3-84e2-a85657226b35","type":"Circle"},{"attributes":{},"id":"fda14d83-cf6c-42fc-a711-3dad775dd176","type":"ToolEvents"},{"attributes":{"below":[{"id":"3de72d00-3bd1-4235-8e9f-93c11450ce8f","type":"LinearAxis"}],"left":[{"id":"8e74fdc8-315a-4e89-ab3b-eadb5425a264","type":"LinearAxis"}],"plot_height":400,"plot_width":400,"renderers":[{"id":"3de72d00-3bd1-4235-8e9f-93c11450ce8f","type":"LinearAxis"},{"id":"b9764799-1635-4871-a1da-9c0bda255788","type":"Grid"},{"id":"8e74fdc8-315a-4e89-ab3b-eadb5425a264","type":"LinearAxis"},{"id":"17a6b1ce-25c5-4300-a543-6a5659de65a6","type":"Grid"},{"id":"c4bd04a4-bac3-485f-89b6-1c4aa3edda57","type":"BoxAnnotation"},{"id":"e7a209e6-85d5-42b5-a1e7-0a282f2a5167","type":"GlyphRenderer"}],"title":{"id":"b4903e30-1cc6-405c-b300-a704368099de","type":"Title"},"tool_events":{"id":"fda14d83-cf6c-42fc-a711-3dad775dd176","type":"ToolEvents"},"toolbar":{"id":"54f320d0-6746-48f8-a493-86a4b15eda87","type":"Toolbar"},"x_range":{"id":"24870b9d-e286-480d-bd17-9844190a7f77","type":"DataRange1d"},"y_range":{"id":"a3615e91-dc25-489c-a9bf-602a42af25ef","type":"DataRange1d"}},"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"24870b9d-e286-480d-bd17-9844190a7f77","type":"DataRange1d"},{"attributes":{"formatter":{"id":"f6385bb3-6b4d-4479-a65e-f8f4d962161d","type":"BasicTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"65225147-fea2-483d-aa0e-525b4f38cfef","type":"BasicTicker"}},"id":"3de72d00-3bd1-4235-8e9f-93c11450ce8f","type":"LinearAxis"},{"attributes":{"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"}},"id":"8fa91927-d5e3-4f97-938c-3a208d321231","type":"HelpTool"},{"attributes":{},"id":"f6385bb3-6b4d-4479-a65e-f8f4d962161d","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f6314c14-c8c1-4806-a1f2-4ce2b34e0156","type":"ColumnDataSource"},"glyph":{"id":"f7cb3238-eacb-4fc3-84e2-a85657226b35","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"27602724-b1c0-4a52-a1d8-c39c5132aa71","type":"Circle"},"selection_glyph":null},"id":"e7a209e6-85d5-42b5-a1e7-0a282f2a5167","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"5f0eff2d-2bae-4ee1-91b0-eadd8e0be8c3","type":"BasicTickFormatter"},"major_label_orientation":"vertical","plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"},"ticker":{"id":"293dfee0-3400-4deb-bf5e-5a08ba84243b","type":"BasicTicker"}},"id":"8e74fdc8-315a-4e89-ab3b-eadb5425a264","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"b4903e30-1cc6-405c-b300-a704368099de","type":"Title"},{"attributes":{"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"}},"id":"98e2824d-7b18-42e7-b6d0-d06b6b71640b","type":"ResetTool"},{"attributes":{"plot":{"id":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c","subtype":"Figure","type":"Plot"}},"id":"d6e5122e-bbf0-40e7-ac7b-7d11a37ae126","type":"PanTool"}],"root_ids":["838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"e5d7b87b-bd04-48b6-aef5-9054e5ac3ee3","elementid":"8abe3f5c-ae1c-4a0b-9f4b-cbc43f5d79f9","modelid":"838cc832-c2f7-4bb2-a20f-ae9ef0e90f1c"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.5.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.5.min.css");
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
