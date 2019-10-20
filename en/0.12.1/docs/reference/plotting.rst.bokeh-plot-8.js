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
      };var element = document.getElementById("cb91e40d-66ba-42be-9a8f-3aa2f213c174");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cb91e40d-66ba-42be-9a8f-3aa2f213c174' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"77150c62-6b62-4c22-97cc-f11db52b4bac":{"roots":{"references":[{"attributes":{"dimension":1,"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"},"ticker":{"id":"d195e80c-50a2-4937-80e8-20887ce29989","type":"BasicTicker"}},"id":"16df5f69-65b4-4187-91a7-7a05de8d63ec","type":"Grid"},{"attributes":{"overlay":{"id":"5c17d4ec-79bf-4b7d-ae5a-fa5bd8fe2c05","type":"BoxAnnotation"},"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"}},"id":"7e23325c-d4ef-4dbf-87e6-15edf2dfa811","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"}},"id":"1368ba44-6f49-4349-9fc6-580273d56817","type":"PanTool"},{"attributes":{"data_source":{"id":"c44b01e4-944e-44cb-bbcb-7c209b0eba55","type":"ColumnDataSource"},"glyph":{"id":"857b5513-9ecc-466b-8153-6dede5d2e4a8","type":"Ellipse"},"hover_glyph":null,"nonselection_glyph":{"id":"fadb1e86-94b0-40a1-9833-debc50fa91aa","type":"Ellipse"},"selection_glyph":null},"id":"d1b91d76-fa3c-463c-b1a4-ea8d964b9c56","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":null},"id":"a3b8e22a-84ee-4fa4-a586-ef446f906035","type":"Title"},{"attributes":{"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"}},"id":"c4c2985b-6a0e-4bd4-ba5d-137c2bf04c55","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"6a362884-40fd-4f5f-aba4-b8a48ebf842c","type":"DataRange1d"},{"attributes":{"fill_color":{"value":null},"height":{"units":"data","value":20},"line_color":{"value":"#386CB0"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"857b5513-9ecc-466b-8153-6dede5d2e4a8","type":"Ellipse"},{"attributes":{},"id":"6d6de269-c4c4-4895-9d5d-091822c113df","type":"BasicTickFormatter"},{"attributes":{},"id":"0217591a-8f41-4370-a47e-1059e6d2c90e","type":"ToolEvents"},{"attributes":{"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"}},"id":"e90ecbc0-131b-4f4c-8101-531e019a5149","type":"SaveTool"},{"attributes":{"formatter":{"id":"05d60702-3144-4c24-afee-53e5765e2f1d","type":"BasicTickFormatter"},"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"},"ticker":{"id":"90695050-557e-433c-8bf6-63fdc2e597a9","type":"BasicTicker"}},"id":"806f757d-2cf7-49bb-bae8-f22654409983","type":"LinearAxis"},{"attributes":{"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"}},"id":"f51a357c-e55a-4ddc-9408-163555a5008c","type":"ResetTool"},{"attributes":{"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"}},"id":"dbe8c46c-5a3c-44d0-95d5-dec8966fe0ef","type":"HelpTool"},{"attributes":{"callback":null},"id":"f7e02165-40c0-45fd-80b2-8b7dcd11eefc","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"height":{"units":"data","value":20},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"width":{"units":"data","value":30},"x":{"field":"x"},"y":{"field":"y"}},"id":"fadb1e86-94b0-40a1-9833-debc50fa91aa","type":"Ellipse"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5c17d4ec-79bf-4b7d-ae5a-fa5bd8fe2c05","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["y","x"],"data":{"x":[1,2,3],"y":[1,2,3]}},"id":"c44b01e4-944e-44cb-bbcb-7c209b0eba55","type":"ColumnDataSource"},{"attributes":{},"id":"d195e80c-50a2-4937-80e8-20887ce29989","type":"BasicTicker"},{"attributes":{"formatter":{"id":"6d6de269-c4c4-4895-9d5d-091822c113df","type":"BasicTickFormatter"},"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"},"ticker":{"id":"d195e80c-50a2-4937-80e8-20887ce29989","type":"BasicTicker"}},"id":"102dd3a4-5e94-40ab-a722-38afd7f11642","type":"LinearAxis"},{"attributes":{},"id":"90695050-557e-433c-8bf6-63fdc2e597a9","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"1368ba44-6f49-4349-9fc6-580273d56817","type":"PanTool"},{"id":"c4c2985b-6a0e-4bd4-ba5d-137c2bf04c55","type":"WheelZoomTool"},{"id":"7e23325c-d4ef-4dbf-87e6-15edf2dfa811","type":"BoxZoomTool"},{"id":"e90ecbc0-131b-4f4c-8101-531e019a5149","type":"SaveTool"},{"id":"f51a357c-e55a-4ddc-9408-163555a5008c","type":"ResetTool"},{"id":"dbe8c46c-5a3c-44d0-95d5-dec8966fe0ef","type":"HelpTool"}]},"id":"67afb3b9-c221-4703-8085-d6888596ad18","type":"Toolbar"},{"attributes":{},"id":"05d60702-3144-4c24-afee-53e5765e2f1d","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"806f757d-2cf7-49bb-bae8-f22654409983","type":"LinearAxis"}],"left":[{"id":"102dd3a4-5e94-40ab-a722-38afd7f11642","type":"LinearAxis"}],"plot_height":300,"plot_width":300,"renderers":[{"id":"806f757d-2cf7-49bb-bae8-f22654409983","type":"LinearAxis"},{"id":"036c7d17-a842-4bb1-b0c1-266713611487","type":"Grid"},{"id":"102dd3a4-5e94-40ab-a722-38afd7f11642","type":"LinearAxis"},{"id":"16df5f69-65b4-4187-91a7-7a05de8d63ec","type":"Grid"},{"id":"5c17d4ec-79bf-4b7d-ae5a-fa5bd8fe2c05","type":"BoxAnnotation"},{"id":"d1b91d76-fa3c-463c-b1a4-ea8d964b9c56","type":"GlyphRenderer"}],"title":{"id":"a3b8e22a-84ee-4fa4-a586-ef446f906035","type":"Title"},"tool_events":{"id":"0217591a-8f41-4370-a47e-1059e6d2c90e","type":"ToolEvents"},"toolbar":{"id":"67afb3b9-c221-4703-8085-d6888596ad18","type":"Toolbar"},"x_range":{"id":"f7e02165-40c0-45fd-80b2-8b7dcd11eefc","type":"DataRange1d"},"y_range":{"id":"6a362884-40fd-4f5f-aba4-b8a48ebf842c","type":"DataRange1d"}},"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"},{"attributes":{"plot":{"id":"3776968e-c2d7-4923-89cc-8d043f289978","subtype":"Figure","type":"Plot"},"ticker":{"id":"90695050-557e-433c-8bf6-63fdc2e597a9","type":"BasicTicker"}},"id":"036c7d17-a842-4bb1-b0c1-266713611487","type":"Grid"}],"root_ids":["3776968e-c2d7-4923-89cc-8d043f289978"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"77150c62-6b62-4c22-97cc-f11db52b4bac","elementid":"cb91e40d-66ba-42be-9a8f-3aa2f213c174","modelid":"3776968e-c2d7-4923-89cc-8d043f289978"}];
              
              Bokeh.embed.embed_items(docs_json, render_items);
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.css");
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