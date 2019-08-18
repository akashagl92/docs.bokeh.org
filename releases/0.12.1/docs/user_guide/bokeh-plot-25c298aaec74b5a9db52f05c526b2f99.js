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
      };var element = document.getElementById("c5522c0c-1e55-489c-bfc0-ae74a87d9eb7");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c5522c0c-1e55-489c-bfc0-ae74a87d9eb7' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.bokeh.org/bokeh/release/bokeh-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.1.min.js', 'https://cdn.bokeh.org/bokeh/release/bokeh-compiler-0.12.1.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              var docs_json = {"ee83c010-487e-4b76-9e1d-08b2997f1450":{"roots":{"references":[{"attributes":{"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"}},"id":"db604ebc-15e8-4734-b6b0-f329c689a036","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"}},"id":"e0333630-b445-4e4a-aee6-1a9a8ba97499","type":"ResetTool"},{"attributes":{"fill_color":{"value":"orange"},"plot":null},"id":"fd9b133a-8f71-4a75-998e-f53cb85d2516","type":"NormalHead"},{"attributes":{"formatter":{"id":"1832c47b-13dd-4d3c-84fa-b8e2347db20d","type":"BasicTickFormatter"},"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},"ticker":{"id":"a39de396-0bbf-4f7e-b457-ce3096b6f0af","type":"BasicTicker"}},"id":"548fb08f-610b-4bbb-bc82-f29aecf535d2","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9d4e6fb9-3bb9-4c50-8ecb-2122d4f3e4c2","type":"PanTool"},{"id":"db604ebc-15e8-4734-b6b0-f329c689a036","type":"WheelZoomTool"},{"id":"d08d80d3-76f9-4c43-a31c-0b2ac68ffdd3","type":"BoxZoomTool"},{"id":"af9b9855-a54f-4f26-ac42-33c49541536a","type":"SaveTool"},{"id":"e0333630-b445-4e4a-aee6-1a9a8ba97499","type":"ResetTool"},{"id":"8878b30d-366a-41f8-acc2-155ea7db7618","type":"HelpTool"}]},"id":"5cc3f627-cd16-44b0-9c28-2b4c5d0eb330","type":"Toolbar"},{"attributes":{"plot":null,"size":35},"id":"ab0a9895-1ae6-4d67-8afd-03e12c6c1078","type":"VeeHead"},{"attributes":{"end":{"id":"ab0a9895-1ae6-4d67-8afd-03e12c6c1078","type":"VeeHead"},"line_color":{"value":"red"},"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0},"x_start":{"value":0.5},"y_end":{"value":0},"y_start":{"value":0.7}},"id":"2fa8ac66-1e0e-4b36-92ec-b4bde9acf8cb","type":"Arrow"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"5e830d6b-f33b-45a7-ab45-d675559c50fe","type":"BoxAnnotation"},{"attributes":{"end":{"id":"fd9b133a-8f71-4a75-998e-f53cb85d2516","type":"NormalHead"},"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":0.5},"x_start":{"value":1},"y_end":{"value":0.7},"y_start":{"value":0}},"id":"1cf48b0e-b5eb-439b-b501-262efc1d4b84","type":"Arrow"},{"attributes":{"data_source":{"id":"4058b8c5-b607-47c7-9120-78db3de79161","type":"ColumnDataSource"},"glyph":{"id":"9785424b-6604-43b2-a001-020b715031b1","type":"Circle"},"hover_glyph":null,"nonselection_glyph":{"id":"5e9b3f2a-6487-46a4-8426-9186cbe7312b","type":"Circle"},"selection_glyph":null},"id":"ac3a4e97-093a-4ca2-aed4-be55338f2884","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"aa208abd-b6e1-4adb-afd5-aef754864098","type":"DataRange1d"},{"attributes":{},"id":"63b0fe04-f1da-4070-a351-ef60be42f614","type":"BasicTickFormatter"},{"attributes":{},"id":"a39de396-0bbf-4f7e-b457-ce3096b6f0af","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","line_color","fill_color"],"data":{"fill_color":["navy","yellow","red"],"line_color":["navy","yellow","red"],"x":[0.0,1.0,0.5],"y":[0.0,0.0,0.7]}},"id":"4058b8c5-b607-47c7-9120-78db3de79161","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"}},"id":"8878b30d-366a-41f8-acc2-155ea7db7618","type":"HelpTool"},{"attributes":{"below":[{"id":"3e80efa7-4ec2-4721-a91a-37def11d6db8","type":"LinearAxis"}],"left":[{"id":"548fb08f-610b-4bbb-bc82-f29aecf535d2","type":"LinearAxis"}],"renderers":[{"id":"3e80efa7-4ec2-4721-a91a-37def11d6db8","type":"LinearAxis"},{"id":"72f92811-6936-4f6c-9a7f-e20976387927","type":"Grid"},{"id":"548fb08f-610b-4bbb-bc82-f29aecf535d2","type":"LinearAxis"},{"id":"3e6a3041-d150-4a87-ab51-e6139ac48adf","type":"Grid"},{"id":"5e830d6b-f33b-45a7-ab45-d675559c50fe","type":"BoxAnnotation"},{"id":"ac3a4e97-093a-4ca2-aed4-be55338f2884","type":"GlyphRenderer"},{"id":"9d2d5330-c104-464e-91a3-2a4481a88f7b","type":"Arrow"},{"id":"1cf48b0e-b5eb-439b-b501-262efc1d4b84","type":"Arrow"},{"id":"2fa8ac66-1e0e-4b36-92ec-b4bde9acf8cb","type":"Arrow"}],"title":{"id":"0d3c1de9-24a0-496d-a87c-9963d14d7560","type":"Title"},"tool_events":{"id":"2e8d9f77-52c7-4d2a-94c6-822164177b15","type":"ToolEvents"},"toolbar":{"id":"5cc3f627-cd16-44b0-9c28-2b4c5d0eb330","type":"Toolbar"},"x_range":{"id":"8c05eda0-8ba8-4aba-9966-1dc30fe390e6","type":"DataRange1d"},"y_range":{"id":"aa208abd-b6e1-4adb-afd5-aef754864098","type":"DataRange1d"}},"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"2e8d9f77-52c7-4d2a-94c6-822164177b15","type":"ToolEvents"},{"attributes":{},"id":"358b7132-85c2-4d66-a73f-56810b27a742","type":"BasicTicker"},{"attributes":{"end":{"id":"5af59882-4472-4b44-9113-ba6fefc1cc7e","type":"OpenHead"},"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},"source":null,"start":null,"x_end":{"value":1},"x_start":{"value":0},"y_end":{"value":0},"y_start":{"value":0}},"id":"9d2d5330-c104-464e-91a3-2a4481a88f7b","type":"Arrow"},{"attributes":{"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"}},"id":"9d4e6fb9-3bb9-4c50-8ecb-2122d4f3e4c2","type":"PanTool"},{"attributes":{"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"}},"id":"af9b9855-a54f-4f26-ac42-33c49541536a","type":"SaveTool"},{"attributes":{"callback":null},"id":"8c05eda0-8ba8-4aba-9966-1dc30fe390e6","type":"DataRange1d"},{"attributes":{"line_color":{"value":"firebrick"},"line_width":{"value":4},"plot":null},"id":"5af59882-4472-4b44-9113-ba6fefc1cc7e","type":"OpenHead"},{"attributes":{},"id":"1832c47b-13dd-4d3c-84fa-b8e2347db20d","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"63b0fe04-f1da-4070-a351-ef60be42f614","type":"BasicTickFormatter"},"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},"ticker":{"id":"358b7132-85c2-4d66-a73f-56810b27a742","type":"BasicTicker"}},"id":"3e80efa7-4ec2-4721-a91a-37def11d6db8","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"5e9b3f2a-6487-46a4-8426-9186cbe7312b","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"field":"fill_color"},"line_color":{"field":"line_color"},"radius":{"units":"data","value":0.1},"x":{"field":"x"},"y":{"field":"y"}},"id":"9785424b-6604-43b2-a001-020b715031b1","type":"Circle"},{"attributes":{"plot":null,"text":null},"id":"0d3c1de9-24a0-496d-a87c-9963d14d7560","type":"Title"},{"attributes":{"overlay":{"id":"5e830d6b-f33b-45a7-ab45-d675559c50fe","type":"BoxAnnotation"},"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"}},"id":"d08d80d3-76f9-4c43-a31c-0b2ac68ffdd3","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},"ticker":{"id":"a39de396-0bbf-4f7e-b457-ce3096b6f0af","type":"BasicTicker"}},"id":"3e6a3041-d150-4a87-ab51-e6139ac48adf","type":"Grid"},{"attributes":{"plot":{"id":"299fb440-304b-4b68-ac5c-514f50ea2bf7","subtype":"Figure","type":"Plot"},"ticker":{"id":"358b7132-85c2-4d66-a73f-56810b27a742","type":"BasicTicker"}},"id":"72f92811-6936-4f6c-9a7f-e20976387927","type":"Grid"}],"root_ids":["299fb440-304b-4b68-ac5c-514f50ea2bf7"]},"title":"Bokeh Application","version":"0.12.1.9393"}};
              var render_items = [{"docid":"ee83c010-487e-4b76-9e1d-08b2997f1450","elementid":"c5522c0c-1e55-489c-bfc0-ae74a87d9eb7","modelid":"299fb440-304b-4b68-ac5c-514f50ea2bf7"}];
              
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