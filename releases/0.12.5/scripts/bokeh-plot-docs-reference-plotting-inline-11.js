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
      };var element = document.getElementById("8f658467-c41b-4a49-bd43-ef16ecc69740");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '8f658467-c41b-4a49-bd43-ef16ecc69740' but no matching script tag was found. ")
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
                var docs_json = {"89d916e4-bb24-44af-a3f0-a8972ba68e31":{"roots":{"references":[{"attributes":{"formatter":{"id":"96415461-5251-48e5-ac12-aa6cde9591d7","type":"BasicTickFormatter"},"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"},"ticker":{"id":"63c1659f-41fb-41f8-a450-404f01d6f4ac","type":"BasicTicker"}},"id":"50579217-532b-4656-a18b-fc54747e8254","type":"LinearAxis"},{"attributes":{"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"9697f073-50fb-4a02-9cc4-cead53274503","type":"Line"},{"attributes":{"callback":null},"id":"702314ff-5fa2-4f59-8738-594ac09d03d2","type":"DataRange1d"},{"attributes":{"data_source":{"id":"dc979ab3-23e9-4d9b-9635-d8a3cb9590eb","type":"ColumnDataSource"},"glyph":{"id":"9697f073-50fb-4a02-9cc4-cead53274503","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"988eb3c6-f008-431f-9fe8-2f9d3d3aac1e","type":"Line"},"selection_glyph":null},"id":"410a5b01-b2af-4baa-9dca-8a1881a8d39a","type":"GlyphRenderer"},{"attributes":{},"id":"0e8f61f8-0ca9-4bdc-92c1-b907a7242421","type":"ToolEvents"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"f7446b36-872d-445e-9d30-a3bb37b5a445","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"}},"id":"0685e0f2-a2fa-4f39-9f43-e7df29747f7d","type":"SaveTool"},{"attributes":{"plot":null,"text":"line"},"id":"c1292e65-8a77-4c6d-bac7-5a0a44be34d7","type":"Title"},{"attributes":{},"id":"63c1659f-41fb-41f8-a450-404f01d6f4ac","type":"BasicTicker"},{"attributes":{"overlay":{"id":"f7446b36-872d-445e-9d30-a3bb37b5a445","type":"BoxAnnotation"},"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"}},"id":"2adaa685-2de8-4ff7-8100-681d8eac1db2","type":"BoxZoomTool"},{"attributes":{},"id":"aadecac0-dd17-4551-80e8-931323aafc88","type":"BasicTicker"},{"attributes":{},"id":"cfee9dd4-45a1-44c8-b2bb-d002135f992e","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"006d919c-3e94-4bfb-aea3-a60263fce30d","type":"PanTool"},{"id":"f9d7f35b-c7d7-4b05-a20e-e979d43b0e5f","type":"WheelZoomTool"},{"id":"2adaa685-2de8-4ff7-8100-681d8eac1db2","type":"BoxZoomTool"},{"id":"0685e0f2-a2fa-4f39-9f43-e7df29747f7d","type":"SaveTool"},{"id":"c4ce2a77-bd97-4dbd-9525-21f66525f096","type":"ResetTool"},{"id":"b77b3a37-f12a-47e3-95f9-0a0644b519ab","type":"HelpTool"}]},"id":"4693237d-0270-4a88-9917-356ba3c29d9a","type":"Toolbar"},{"attributes":{"below":[{"id":"50579217-532b-4656-a18b-fc54747e8254","type":"LinearAxis"}],"left":[{"id":"82af3589-ed72-4121-b174-7e4eab2219ef","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"50579217-532b-4656-a18b-fc54747e8254","type":"LinearAxis"},{"id":"b4009633-8573-4991-ab61-d312ecab1f36","type":"Grid"},{"id":"82af3589-ed72-4121-b174-7e4eab2219ef","type":"LinearAxis"},{"id":"288f8022-39af-4abb-a433-ba6516565ca2","type":"Grid"},{"id":"f7446b36-872d-445e-9d30-a3bb37b5a445","type":"BoxAnnotation"},{"id":"410a5b01-b2af-4baa-9dca-8a1881a8d39a","type":"GlyphRenderer"}],"title":{"id":"c1292e65-8a77-4c6d-bac7-5a0a44be34d7","type":"Title"},"tool_events":{"id":"0e8f61f8-0ca9-4bdc-92c1-b907a7242421","type":"ToolEvents"},"toolbar":{"id":"4693237d-0270-4a88-9917-356ba3c29d9a","type":"Toolbar"},"x_range":{"id":"702314ff-5fa2-4f59-8738-594ac09d03d2","type":"DataRange1d"},"y_range":{"id":"c803e900-9a77-40c4-a325-8f7c0ad2162b","type":"DataRange1d"}},"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[1,2,3,4,5],"y":[6,7,2,4,5]}},"id":"dc979ab3-23e9-4d9b-9635-d8a3cb9590eb","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"c803e900-9a77-40c4-a325-8f7c0ad2162b","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"988eb3c6-f008-431f-9fe8-2f9d3d3aac1e","type":"Line"},{"attributes":{"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"}},"id":"b77b3a37-f12a-47e3-95f9-0a0644b519ab","type":"HelpTool"},{"attributes":{"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"}},"id":"f9d7f35b-c7d7-4b05-a20e-e979d43b0e5f","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"}},"id":"006d919c-3e94-4bfb-aea3-a60263fce30d","type":"PanTool"},{"attributes":{},"id":"96415461-5251-48e5-ac12-aa6cde9591d7","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"cfee9dd4-45a1-44c8-b2bb-d002135f992e","type":"BasicTickFormatter"},"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"},"ticker":{"id":"aadecac0-dd17-4551-80e8-931323aafc88","type":"BasicTicker"}},"id":"82af3589-ed72-4121-b174-7e4eab2219ef","type":"LinearAxis"},{"attributes":{"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"}},"id":"c4ce2a77-bd97-4dbd-9525-21f66525f096","type":"ResetTool"},{"attributes":{"dimension":1,"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"},"ticker":{"id":"aadecac0-dd17-4551-80e8-931323aafc88","type":"BasicTicker"}},"id":"288f8022-39af-4abb-a433-ba6516565ca2","type":"Grid"},{"attributes":{"plot":{"id":"ff374c67-f010-415d-a63f-e154f8387c39","subtype":"Figure","type":"Plot"},"ticker":{"id":"63c1659f-41fb-41f8-a450-404f01d6f4ac","type":"BasicTicker"}},"id":"b4009633-8573-4991-ab61-d312ecab1f36","type":"Grid"}],"root_ids":["ff374c67-f010-415d-a63f-e154f8387c39"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"89d916e4-bb24-44af-a3f0-a8972ba68e31","elementid":"8f658467-c41b-4a49-bd43-ef16ecc69740","modelid":"ff374c67-f010-415d-a63f-e154f8387c39"}];
                
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
