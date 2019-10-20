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
      };var element = document.getElementById("538c1e49-1423-42f1-b488-89e3da0f131a");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '538c1e49-1423-42f1-b488-89e3da0f131a' but no matching script tag was found. ")
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
                  var docs_json = {"9aad166c-6b19-4f6c-9e37-14d17f13bb78":{"roots":{"references":[{"attributes":{},"id":"f28827a6-e9c3-47c8-9e10-512901ecb734","type":"BasicTicker"},{"attributes":{"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"}},"id":"65429733-64b9-457c-bdef-19d4597ec07e","type":"PanTool"},{"attributes":{},"id":"26054406-dcda-4292-8c0d-635e01516960","type":"BasicTickFormatter"},{"attributes":{},"id":"ad46c228-c1f8-4764-9159-f9b9b9d35e17","type":"ToolEvents"},{"attributes":{},"id":"25c950e2-7eed-45f7-b664-3931ab0e464f","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0.0,1.0,0.5],"y":[0.0,0.0,0.7]}},"id":"8c151246-6da7-42c0-afb1-adf3f1961a69","type":"ColumnDataSource"},{"attributes":{"plot":null,"text":null},"id":"e740c87e-974e-44c7-9b9f-128381312e1a","type":"Title"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"65429733-64b9-457c-bdef-19d4597ec07e","type":"PanTool"},{"id":"f4db3e5e-2b8a-405a-8ee7-c01fe0ddefba","type":"WheelZoomTool"},{"id":"2b2d5fd1-1910-40ee-b363-1becf90ad5e8","type":"BoxZoomTool"},{"id":"cbaa2fe7-6a1c-4061-8b48-d9861b4e4a51","type":"SaveTool"},{"id":"bdf2656d-76aa-4bd2-9f39-e26b4f23f660","type":"ResetTool"},{"id":"b4dbc273-67d8-4247-9e31-288ecad30f1b","type":"HelpTool"}]},"id":"eaeab42c-4cfb-4fae-9bee-5d4f0b6c93c9","type":"Toolbar"},{"attributes":{"callback":null},"id":"b30e2de8-a422-4a19-b73d-73080c5e0947","type":"DataRange1d"},{"attributes":{"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"}},"id":"f4db3e5e-2b8a-405a-8ee7-c01fe0ddefba","type":"WheelZoomTool"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"f9f55d38-ac2b-4697-b3d9-6b432ac4c4e6","type":"OpenHead"},{"attributes":{"below":[{"id":"74d94f9c-5ed8-4006-a2f0-a8ff4158d018","type":"LinearAxis"}],"left":[{"id":"fdef8b1d-3c46-425c-b101-19aed4f6eb06","type":"LinearAxis"}],"renderers":[{"id":"74d94f9c-5ed8-4006-a2f0-a8ff4158d018","type":"LinearAxis"},{"id":"bec69205-dfd7-4d04-a37d-91bfddbae94d","type":"Grid"},{"id":"fdef8b1d-3c46-425c-b101-19aed4f6eb06","type":"LinearAxis"},{"id":"f9b14f16-6e18-483b-941f-3c40c73fd279","type":"Grid"},{"id":"d9bc0e3e-575b-4f37-9a9c-1a53859786ea","type":"BoxAnnotation"},{"id":"7684b4d6-4d1e-4fa7-b5c5-ced10970c141","type":"GlyphRenderer"},{"id":"b28b7dbf-ae74-4e07-9c65-7830cb646526","type":"Arrow"},{"id":"9ce857ad-7092-4fe7-b955-53eb0b246592","type":"Arrow"},{"id":"8bf7041f-4fcb-4c9e-802f-f0ac8bfbd673","type":"Arrow"}],"title":{"id":"e740c87e-974e-44c7-9b9f-128381312e1a","type":"Title"},"tool_events":{"id":"ad46c228-c1f8-4764-9159-f9b9b9d35e17","type":"ToolEvents"},"toolbar":{"id":"eaeab42c-4cfb-4fae-9bee-5d4f0b6c93c9","type":"Toolbar"},"x_range":{"id":"a34323dd-e970-4e0e-99c4-37630e3be015","type":"DataRange1d"},"y_range":{"id":"b30e2de8-a422-4a19-b73d-73080c5e0947","type":"DataRange1d"}},"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"3350ceee-1c7e-47c8-b258-73c40a50013c","type":"Circle"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"bb695e84-6121-4f7e-8044-2c5efb21f9ad","type":"NormalHead"},{"attributes":{"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f28827a6-e9c3-47c8-9e10-512901ecb734","type":"BasicTicker"}},"id":"bec69205-dfd7-4d04-a37d-91bfddbae94d","type":"Grid"},{"attributes":{"plot":null,"size":35},"id":"19bd8d32-6050-4aae-a51c-d831b192e1dc","type":"VeeHead"},{"attributes":{"end":{"id":"f9f55d38-ac2b-4697-b3d9-6b432ac4c4e6","type":"OpenHead"},"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"b28b7dbf-ae74-4e07-9c65-7830cb646526","type":"Arrow"},{"attributes":{"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"}},"id":"cbaa2fe7-6a1c-4061-8b48-d9861b4e4a51","type":"SaveTool"},{"attributes":{},"id":"ebad2c18-0781-461a-9065-0a1d0076ca52","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebad2c18-0781-461a-9065-0a1d0076ca52","type":"BasicTicker"}},"id":"f9b14f16-6e18-483b-941f-3c40c73fd279","type":"Grid"},{"attributes":{"end":{"id":"19bd8d32-6050-4aae-a51c-d831b192e1dc","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"8bf7041f-4fcb-4c9e-802f-f0ac8bfbd673","type":"Arrow"},{"attributes":{"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"}},"id":"bdf2656d-76aa-4bd2-9f39-e26b4f23f660","type":"ResetTool"},{"attributes":{"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"}},"id":"b4dbc273-67d8-4247-9e31-288ecad30f1b","type":"HelpTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d9bc0e3e-575b-4f37-9a9c-1a53859786ea","type":"BoxAnnotation"},{"attributes":{"formatter":{"id":"26054406-dcda-4292-8c0d-635e01516960","type":"BasicTickFormatter"},"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},"ticker":{"id":"f28827a6-e9c3-47c8-9e10-512901ecb734","type":"BasicTicker"}},"id":"74d94f9c-5ed8-4006-a2f0-a8ff4158d018","type":"LinearAxis"},{"attributes":{"data_source":{"id":"8c151246-6da7-42c0-afb1-adf3f1961a69","type":"ColumnDataSource"},"glyph":{"id":"e5381202-38cc-4e24-b0f5-0cad314734a3","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"3350ceee-1c7e-47c8-b258-73c40a50013c","type":"Circle"},"selection_glyph":null},"id":"7684b4d6-4d1e-4fa7-b5c5-ced10970c141","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"e5381202-38cc-4e24-b0f5-0cad314734a3","type":"Circle"},{"attributes":{"end":{"id":"bb695e84-6121-4f7e-8044-2c5efb21f9ad","type":"NormalHead"},"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"9ce857ad-7092-4fe7-b955-53eb0b246592","type":"Arrow"},{"attributes":{"overlay":{"id":"d9bc0e3e-575b-4f37-9a9c-1a53859786ea","type":"BoxAnnotation"},"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"}},"id":"2b2d5fd1-1910-40ee-b363-1becf90ad5e8","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"25c950e2-7eed-45f7-b664-3931ab0e464f","type":"BasicTickFormatter"},"plot":{"id":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c","subtype":"Figure","type":"Plot"},"ticker":{"id":"ebad2c18-0781-461a-9065-0a1d0076ca52","type":"BasicTicker"}},"id":"fdef8b1d-3c46-425c-b101-19aed4f6eb06","type":"LinearAxis"},{"attributes":{"callback":null},"id":"a34323dd-e970-4e0e-99c4-37630e3be015","type":"DataRange1d"}],"root_ids":["d2516f7a-bfb3-40b5-b466-4fdff7469e9c"]},"title":"Bokeh Application","version":"0.12.3.10133"}};
                  var render_items = [{"docid":"9aad166c-6b19-4f6c-9e37-14d17f13bb78","elementid":"538c1e49-1423-42f1-b488-89e3da0f131a","modelid":"d2516f7a-bfb3-40b5-b466-4fdff7469e9c"}];
                  
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