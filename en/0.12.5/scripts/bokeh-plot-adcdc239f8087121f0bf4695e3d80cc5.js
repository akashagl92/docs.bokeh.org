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
      };var element = document.getElementById("a416b123-6129-4a79-bde8-d9611e2bb809");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'a416b123-6129-4a79-bde8-d9611e2bb809' but no matching script tag was found. ")
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
                var docs_json = {"19fdbfba-a778-4ce6-8d32-27b91131f0b9":{"roots":{"references":[{"attributes":{"plot":null,"size":35},"id":"7e73e5e8-09ee-4229-b292-0c5476c1c6d4","type":"VeeHead"},{"attributes":{"below":[{"id":"2059134d-db7f-433f-bd0a-9da367e3bf3b","type":"LinearAxis"}],"left":[{"id":"ac7a9cd1-aa51-4df3-991d-f15630cff2bf","type":"LinearAxis"}],"renderers":[{"id":"2059134d-db7f-433f-bd0a-9da367e3bf3b","type":"LinearAxis"},{"id":"bfa966e9-8526-4e98-8139-3359169b2f48","type":"Grid"},{"id":"ac7a9cd1-aa51-4df3-991d-f15630cff2bf","type":"LinearAxis"},{"id":"5fc67a36-6449-4b89-92ee-aaebd8fc3ba4","type":"Grid"},{"id":"69a2658a-88e0-48f8-98f8-ceaba94fa695","type":"BoxAnnotation"},{"id":"1b0700cd-31c2-4afb-8d9c-e704992ce0c1","type":"GlyphRenderer"},{"id":"07486ba9-6162-4620-8be6-ae58b7b5fa7f","type":"Arrow"},{"id":"db21141c-bfa3-4e8b-b930-2c1fe11dc3f6","type":"Arrow"},{"id":"fff7ce95-62ce-4109-9681-058af3e8a6a1","type":"Arrow"}],"title":{"id":"4a249a1c-488e-49fa-9915-12c8aebc0b26","type":"Title"},"tool_events":{"id":"e2b290c3-9524-4b4a-9afc-060dd343f6ce","type":"ToolEvents"},"toolbar":{"id":"45994bbc-8dba-43d8-a956-fb5d89033eb3","type":"Toolbar"},"x_range":{"id":"0f3ba7ab-ec9e-45f7-8ea0-646a567186b9","type":"DataRange1d"},"y_range":{"id":"60afa1be-c23c-4ca0-bb45-dbe236788447","type":"DataRange1d"}},"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"60afa1be-c23c-4ca0-bb45-dbe236788447","type":"DataRange1d"},{"attributes":{},"id":"9bdb4d9f-e54d-418a-bcc5-e854306574b7","type":"BasicTickFormatter"},{"attributes":{},"id":"e2b290c3-9524-4b4a-9afc-060dd343f6ce","type":"ToolEvents"},{"attributes":{"callback":null},"id":"0f3ba7ab-ec9e-45f7-8ea0-646a567186b9","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"ec7b4889-8692-4c77-8f17-41f125a19824","type":"Circle"},{"attributes":{"formatter":{"id":"9bdb4d9f-e54d-418a-bcc5-e854306574b7","type":"BasicTickFormatter"},"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f0608eb-1edc-4996-a827-28f1913645a1","type":"BasicTicker"}},"id":"2059134d-db7f-433f-bd0a-9da367e3bf3b","type":"LinearAxis"},{"attributes":{"end":{"id":"4d9d0072-29b8-4fbe-9625-5453eeea4ebb","type":"NormalHead"},"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"db21141c-bfa3-4e8b-b930-2c1fe11dc3f6","type":"Arrow"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"69a2658a-88e0-48f8-98f8-ceaba94fa695","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"4f0608eb-1edc-4996-a827-28f1913645a1","type":"BasicTicker"}},"id":"bfa966e9-8526-4e98-8139-3359169b2f48","type":"Grid"},{"attributes":{"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"}},"id":"699342d7-8d1c-44c1-8bf0-e5ca4accc407","type":"HelpTool"},{"attributes":{"end":{"id":"7e73e5e8-09ee-4229-b292-0c5476c1c6d4","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"fff7ce95-62ce-4109-9681-058af3e8a6a1","type":"Arrow"},{"attributes":{"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"}},"id":"e4d69243-0787-454b-98e8-dbb95137d29e","type":"PanTool"},{"attributes":{},"id":"4f0608eb-1edc-4996-a827-28f1913645a1","type":"BasicTicker"},{"attributes":{"overlay":{"id":"69a2658a-88e0-48f8-98f8-ceaba94fa695","type":"BoxAnnotation"},"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"}},"id":"64347788-9196-4c06-972b-54c908c40958","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"1007a862-8e5e-4041-bb80-ef6661c3821d","type":"BasicTickFormatter"},"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"dde3e474-d9ed-4a17-9fa9-9861a9983f25","type":"BasicTicker"}},"id":"ac7a9cd1-aa51-4df3-991d-f15630cff2bf","type":"LinearAxis"},{"attributes":{"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"}},"id":"604709be-2c28-4697-a452-af6ad6693116","type":"ResetTool"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"354f6df6-7396-4948-a701-c23489b3d983","type":"OpenHead"},{"attributes":{"plot":null,"text":""},"id":"4a249a1c-488e-49fa-9915-12c8aebc0b26","type":"Title"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a924529-037d-46f3-81b0-dca12155d9fe","type":"Circle"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"e4d69243-0787-454b-98e8-dbb95137d29e","type":"PanTool"},{"id":"a80741b6-9044-4337-a1f5-082bc72f2a01","type":"WheelZoomTool"},{"id":"64347788-9196-4c06-972b-54c908c40958","type":"BoxZoomTool"},{"id":"bd0dbf39-ee9d-473f-be07-1c885da23350","type":"SaveTool"},{"id":"604709be-2c28-4697-a452-af6ad6693116","type":"ResetTool"},{"id":"699342d7-8d1c-44c1-8bf0-e5ca4accc407","type":"HelpTool"}]},"id":"45994bbc-8dba-43d8-a956-fb5d89033eb3","type":"Toolbar"},{"attributes":{"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"}},"id":"a80741b6-9044-4337-a1f5-082bc72f2a01","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"}},"id":"bd0dbf39-ee9d-473f-be07-1c885da23350","type":"SaveTool"},{"attributes":{},"id":"1007a862-8e5e-4041-bb80-ef6661c3821d","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"4d9d0072-29b8-4fbe-9625-5453eeea4ebb","type":"NormalHead"},{"attributes":{"end":{"id":"354f6df6-7396-4948-a701-c23489b3d983","type":"OpenHead"},"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"07486ba9-6162-4620-8be6-ae58b7b5fa7f","type":"Arrow"},{"attributes":{"callback":null,"column_names":["x","y","fill_color","line_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0,1,0.5],"y":[0,0,0.7]}},"id":"289b9e2e-e46d-4386-97ac-7757bfe16b47","type":"ColumnDataSource"},{"attributes":{},"id":"dde3e474-d9ed-4a17-9fa9-9861a9983f25","type":"BasicTicker"},{"attributes":{"data_source":{"id":"289b9e2e-e46d-4386-97ac-7757bfe16b47","type":"ColumnDataSource"},"glyph":{"id":"6a924529-037d-46f3-81b0-dca12155d9fe","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ec7b4889-8692-4c77-8f17-41f125a19824","type":"Circle"},"selection_glyph":null},"id":"1b0700cd-31c2-4afb-8d9c-e704992ce0c1","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"b22aa931-03a6-434b-b121-9eb476209fb4","subtype":"Figure","type":"Plot"},"ticker":{"id":"dde3e474-d9ed-4a17-9fa9-9861a9983f25","type":"BasicTicker"}},"id":"5fc67a36-6449-4b89-92ee-aaebd8fc3ba4","type":"Grid"}],"root_ids":["b22aa931-03a6-434b-b121-9eb476209fb4"]},"title":"Bokeh Application","version":"0.12.5"}};
                var render_items = [{"docid":"19fdbfba-a778-4ce6-8d32-27b91131f0b9","elementid":"a416b123-6129-4a79-bde8-d9611e2bb809","modelid":"b22aa931-03a6-434b-b121-9eb476209fb4"}];
                
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
