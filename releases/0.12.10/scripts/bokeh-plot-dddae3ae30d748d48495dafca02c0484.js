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
      };var element = document.getElementById("f285fa68-8d5b-4a4c-b5fe-f871bffb1195");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'f285fa68-8d5b-4a4c-b5fe-f871bffb1195' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.10.min.js"];
    
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
                (function(root) {
                  function embed_document(root) {
                    var docs_json = {"149bb989-32a4-4963-9bd3-977b22d74b13":{"roots":{"references":[{"attributes":{},"id":"04a70b0d-f7aa-4beb-9d40-4950df360b80","type":"LinearScale"},{"attributes":{"data_source":{"id":"8f5979e4-f057-4a5b-9593-8c80fef1c454","type":"ColumnDataSource"},"glyph":{"id":"c3c466f9-0b8f-4d5d-846c-50e761e57781","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"a9f5f789-7323-4823-ba52-4bf325a7944e","type":"Square"},"selection_glyph":null,"view":{"id":"94926b7a-6ed4-458b-a583-3d4352b11716","type":"CDSView"}},"id":"19f67eba-90ae-4c2e-9c45-dea131807014","type":"GlyphRenderer"},{"attributes":{"overlay":{"id":"3fc1cddc-1c42-4ef9-8b2d-5c5a4830b9c8","type":"BoxAnnotation"}},"id":"8b7f40e3-49a8-43d0-88ad-7294ab999853","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"fc93195e-ffb9-48d8-8040-2cd55b94fb92","type":"DataRange1d"},{"attributes":{},"id":"355d8f4c-dc35-4896-b9df-2d7420632981","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"bec2e316-74cb-4bb4-98a1-56335bc24e37","type":"Title"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"4e6bf776-63d7-463f-9129-7628a769d644","type":"Circle"},{"attributes":{},"id":"cbf413dd-d4cd-493d-b4ab-5f8795b63e83","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"112f8a4b-a225-4911-8924-fe8e0658946f","type":"DataRange1d"},{"attributes":{"children":[{"id":"20d07a01-a073-44b9-b83b-ee77ef2b3052","subtype":"Figure","type":"Plot"},{"id":"af219ce3-3bcf-47c5-8441-0ee810cf46a6","subtype":"Figure","type":"Plot"}]},"id":"aff4b98b-643c-460d-bb26-b1d2ea73c578","type":"Row"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"02a10b1a-ad52-4ae9-b4d3-a8191e81f875","type":"PanTool"},{"id":"e79d0dba-54a9-4aee-810e-46f9349c4d50","type":"WheelZoomTool"},{"id":"7b5c785d-2a2a-4591-a9ff-7d683f546f66","type":"BoxZoomTool"},{"id":"71535ca1-7f05-40b0-8d32-a4eef38a1982","type":"SaveTool"},{"id":"07d75a04-8e1d-4377-9b22-1e4aea7dd4fc","type":"ResetTool"},{"id":"ad5c3707-f2a8-4930-bdcb-72b3f0a4dcd4","type":"HelpTool"}]},"id":"c3435649-0aa0-45c1-a27b-d90d8bc9f754","type":"Toolbar"},{"attributes":{},"id":"9f444dd2-730e-4260-ba0b-75b905e21a71","type":"BasicTicker"},{"attributes":{},"id":"32478305-b70b-487d-9a5c-502424a65e43","type":"ResetTool"},{"attributes":{"below":[{"id":"bb87b3b1-9b08-49ba-867b-b28fd77c0fc8","type":"LinearAxis"}],"left":[{"id":"70ec4ef6-a72e-4f91-a01d-b1535acb1755","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"bb87b3b1-9b08-49ba-867b-b28fd77c0fc8","type":"LinearAxis"},{"id":"bec7f4a1-1a91-47f9-afeb-b9cd5aee4d79","type":"Grid"},{"id":"70ec4ef6-a72e-4f91-a01d-b1535acb1755","type":"LinearAxis"},{"id":"b570052f-5413-4cce-a7ea-98561e48b2c9","type":"Grid"},{"id":"14380c37-3121-4e6f-be46-15c44c5be9b0","type":"BoxAnnotation"},{"id":"c6c370bc-59e7-4c71-aba0-7074fc505448","type":"GlyphRenderer"}],"title":{"id":"fc8731df-9267-43da-ab24-1334f2f13f3e","type":"Title"},"toolbar":{"id":"c3435649-0aa0-45c1-a27b-d90d8bc9f754","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"112f8a4b-a225-4911-8924-fe8e0658946f","type":"DataRange1d"},"x_scale":{"id":"04a70b0d-f7aa-4beb-9d40-4950df360b80","type":"LinearScale"},"y_range":{"id":"fc93195e-ffb9-48d8-8040-2cd55b94fb92","type":"DataRange1d"},"y_scale":{"id":"99a3cc6f-bff7-474c-adfe-d1101eda9d36","type":"LinearScale"}},"id":"20d07a01-a073-44b9-b83b-ee77ef2b3052","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"9e31d344-1915-47ea-86be-4d07b982fc00","type":"PanTool"},{"id":"cbf413dd-d4cd-493d-b4ab-5f8795b63e83","type":"WheelZoomTool"},{"id":"8b7f40e3-49a8-43d0-88ad-7294ab999853","type":"BoxZoomTool"},{"id":"cb2d914e-6416-4dea-94d4-d87777fcd503","type":"SaveTool"},{"id":"32478305-b70b-487d-9a5c-502424a65e43","type":"ResetTool"},{"id":"ff853e9d-f80c-4f07-aad7-f35913d2c99c","type":"HelpTool"}]},"id":"02c3eee9-dc82-48d9-944f-93e516088bac","type":"Toolbar"},{"attributes":{},"id":"7f6ff1b3-48be-48e5-a34b-54346b6e6d75","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"a26adbf5-31df-4f9e-8079-584f5df94cda","type":"ColumnDataSource"},"glyph":{"id":"4e6bf776-63d7-463f-9129-7628a769d644","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"2ad8ca34-d81e-409b-94bc-5f97d9867650","type":"Circle"},"selection_glyph":null,"view":{"id":"fe702812-1957-44b4-aeba-ea389fdde9ec","type":"CDSView"}},"id":"c6c370bc-59e7-4c71-aba0-7074fc505448","type":"GlyphRenderer"},{"attributes":{},"id":"d2e75a0e-b661-4168-89d2-a22e4eb24887","type":"BasicTickFormatter"},{"attributes":{},"id":"aa9b9c02-16a7-46c0-a3c4-465832264c7b","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"a9f5f789-7323-4823-ba52-4bf325a7944e","type":"Square"},{"attributes":{},"id":"ff853e9d-f80c-4f07-aad7-f35913d2c99c","type":"HelpTool"},{"attributes":{"dimension":1,"plot":{"id":"af219ce3-3bcf-47c5-8441-0ee810cf46a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d1246eb-04c7-43e6-99dc-65862ce668d9","type":"BasicTicker"}},"id":"22835bc2-7776-4500-8655-110780500d6d","type":"Grid"},{"attributes":{},"id":"2bdda776-8383-478e-aebf-ab2693e311d3","type":"LinearScale"},{"attributes":{},"id":"05de7cde-6f98-4b99-b801-76d356fda3b1","type":"SaveTool"},{"attributes":{"dimension":1,"plot":{"id":"bd07a23d-7a31-4348-85f7-d84b3a450840","subtype":"Figure","type":"Plot"},"ticker":{"id":"41b78c08-bfa8-4a85-9927-49c8bf9a9bce","type":"BasicTicker"}},"id":"b529dad6-cdd0-4764-8420-7b604a2f462d","type":"Grid"},{"attributes":{"formatter":{"id":"355d8f4c-dc35-4896-b9df-2d7420632981","type":"BasicTickFormatter"},"plot":{"id":"bd07a23d-7a31-4348-85f7-d84b3a450840","subtype":"Figure","type":"Plot"},"ticker":{"id":"41b78c08-bfa8-4a85-9927-49c8bf9a9bce","type":"BasicTicker"}},"id":"79ebdb09-20a7-4f72-ba68-71db4bcc2e51","type":"LinearAxis"},{"attributes":{"below":[{"id":"51803530-124c-4508-9ed1-78e84b4d741e","type":"LinearAxis"}],"left":[{"id":"79ebdb09-20a7-4f72-ba68-71db4bcc2e51","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"51803530-124c-4508-9ed1-78e84b4d741e","type":"LinearAxis"},{"id":"6a8801cb-a058-486d-85e4-64d0cbea5a1b","type":"Grid"},{"id":"79ebdb09-20a7-4f72-ba68-71db4bcc2e51","type":"LinearAxis"},{"id":"b529dad6-cdd0-4764-8420-7b604a2f462d","type":"Grid"},{"id":"3fc1cddc-1c42-4ef9-8b2d-5c5a4830b9c8","type":"BoxAnnotation"},{"id":"19f67eba-90ae-4c2e-9c45-dea131807014","type":"GlyphRenderer"}],"title":{"id":"bec2e316-74cb-4bb4-98a1-56335bc24e37","type":"Title"},"toolbar":{"id":"02c3eee9-dc82-48d9-944f-93e516088bac","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"d2d085ec-bba2-4941-b238-d831f3a4fc41","type":"DataRange1d"},"x_scale":{"id":"2bdda776-8383-478e-aebf-ab2693e311d3","type":"LinearScale"},"y_range":{"id":"85547ee2-3b40-4bb8-92a5-d319265ba3af","type":"DataRange1d"},"y_scale":{"id":"ea610e36-8245-4d40-b3ab-5673c14965ed","type":"LinearScale"}},"id":"bd07a23d-7a31-4348-85f7-d84b3a450840","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"99a3cc6f-bff7-474c-adfe-d1101eda9d36","type":"LinearScale"},{"attributes":{"dimension":1,"plot":{"id":"20d07a01-a073-44b9-b83b-ee77ef2b3052","subtype":"Figure","type":"Plot"},"ticker":{"id":"081d2674-f7b4-468b-ba9c-117d19ece2f8","type":"BasicTicker"}},"id":"b570052f-5413-4cce-a7ea-98561e48b2c9","type":"Grid"},{"attributes":{"callback":null},"id":"1f33daa3-292f-47fc-9faf-7a4a2616b3ff","type":"DataRange1d"},{"attributes":{},"id":"de58ff08-0790-46bc-8e1f-0aa22ac2ed23","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3fc1cddc-1c42-4ef9-8b2d-5c5a4830b9c8","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"bd07a23d-7a31-4348-85f7-d84b3a450840","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f444dd2-730e-4260-ba0b-75b905e21a71","type":"BasicTicker"}},"id":"6a8801cb-a058-486d-85e4-64d0cbea5a1b","type":"Grid"},{"attributes":{"children":[{"id":"aff4b98b-643c-460d-bb26-b1d2ea73c578","type":"Row"},{"id":"a26812d0-ee9b-4b87-baa0-0e88b18daf7a","type":"Row"}]},"id":"415ed919-34b0-45b2-baa3-b1cd9f85cc30","type":"Column"},{"attributes":{},"id":"ea610e36-8245-4d40-b3ab-5673c14965ed","type":"LinearScale"},{"attributes":{},"id":"ee4d74a6-e28a-476c-93f0-bf65340fa90c","type":"PanTool"},{"attributes":{},"id":"e79d0dba-54a9-4aee-810e-46f9349c4d50","type":"WheelZoomTool"},{"attributes":{},"id":"cb2d914e-6416-4dea-94d4-d87777fcd503","type":"SaveTool"},{"attributes":{},"id":"1c8620a8-64dc-4a96-aafd-a4f593bb868e","type":"BasicTicker"},{"attributes":{},"id":"ad5c3707-f2a8-4930-bdcb-72b3f0a4dcd4","type":"HelpTool"},{"attributes":{"callback":null},"id":"da661103-b769-42d4-acf4-f257a245ba20","type":"DataRange1d"},{"attributes":{},"id":"7ce89699-f85c-43c0-a424-6e6c402ad99f","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"b3e68cf2-334e-429d-8f5d-286718626c32","type":"BasicTickFormatter"},"plot":{"id":"20d07a01-a073-44b9-b83b-ee77ef2b3052","subtype":"Figure","type":"Plot"},"ticker":{"id":"de58ff08-0790-46bc-8e1f-0aa22ac2ed23","type":"BasicTicker"}},"id":"bb87b3b1-9b08-49ba-867b-b28fd77c0fc8","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"8cbfbc6d-cdeb-454a-a444-4178eb88af77","type":"Title"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"d22f1f0b-283f-4dec-861a-25e387747abe","type":"BoxAnnotation"},{"attributes":{"data_source":{"id":"1aced012-a790-4a4b-880f-1e5ee452f47f","type":"ColumnDataSource"},"glyph":{"id":"7842e994-6834-4123-bcb3-5a885620517a","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"6a37a812-6bd0-4f10-a866-a20d34dbbe01","type":"Triangle"},"selection_glyph":null,"view":{"id":"f2e1ddaa-fdd0-4e00-84c9-82b2515bc3a9","type":"CDSView"}},"id":"869d9181-81b8-4c6c-afa4-def791e63cfc","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ee4d74a6-e28a-476c-93f0-bf65340fa90c","type":"PanTool"},{"id":"7f6ff1b3-48be-48e5-a34b-54346b6e6d75","type":"WheelZoomTool"},{"id":"95238c94-20d1-4b06-935f-0099d92de4b0","type":"BoxZoomTool"},{"id":"05de7cde-6f98-4b99-b801-76d356fda3b1","type":"SaveTool"},{"id":"bf22c179-90e7-45c4-922f-504c40013cdf","type":"ResetTool"},{"id":"21cb5bc1-012c-4135-9197-cb911c0d4d0e","type":"HelpTool"}]},"id":"314aac61-c18f-4773-b2a9-696f61197634","type":"Toolbar"},{"attributes":{},"id":"b3e68cf2-334e-429d-8f5d-286718626c32","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"6dca5d0d-aff5-40d4-a3c8-be6e5ad86f6d","type":"BasicTickFormatter"},"plot":{"id":"20d07a01-a073-44b9-b83b-ee77ef2b3052","subtype":"Figure","type":"Plot"},"ticker":{"id":"081d2674-f7b4-468b-ba9c-117d19ece2f8","type":"BasicTicker"}},"id":"70ec4ef6-a72e-4f91-a01d-b1535acb1755","type":"LinearAxis"},{"attributes":{"formatter":{"id":"e73b3e67-015b-42e4-8fe0-7fb3de70105b","type":"BasicTickFormatter"},"plot":{"id":"af219ce3-3bcf-47c5-8441-0ee810cf46a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c8620a8-64dc-4a96-aafd-a4f593bb868e","type":"BasicTicker"}},"id":"103d003c-2c4c-4089-9d4a-c50c823046a2","type":"LinearAxis"},{"attributes":{"children":[{"id":"189c14ad-5ef1-4650-be5d-ec5108a82d08","type":"ToolbarBox"},{"id":"415ed919-34b0-45b2-baa3-b1cd9f85cc30","type":"Column"}]},"id":"7f89d2e4-4439-435f-82bd-34d2e27309f0","type":"Column"},{"attributes":{"children":[{"id":"bd07a23d-7a31-4348-85f7-d84b3a450840","subtype":"Figure","type":"Plot"}]},"id":"a26812d0-ee9b-4b87-baa0-0e88b18daf7a","type":"Row"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"6a37a812-6bd0-4f10-a866-a20d34dbbe01","type":"Triangle"},{"attributes":{"plot":null,"text":""},"id":"fc8731df-9267-43da-ab24-1334f2f13f3e","type":"Title"},{"attributes":{"overlay":{"id":"14380c37-3121-4e6f-be46-15c44c5be9b0","type":"BoxAnnotation"}},"id":"7b5c785d-2a2a-4591-a9ff-7d683f546f66","type":"BoxZoomTool"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7842e994-6834-4123-bcb3-5a885620517a","type":"Triangle"},{"attributes":{},"id":"07d75a04-8e1d-4377-9b22-1e4aea7dd4fc","type":"ResetTool"},{"attributes":{},"id":"21cb5bc1-012c-4135-9197-cb911c0d4d0e","type":"HelpTool"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"02a10b1a-ad52-4ae9-b4d3-a8191e81f875","type":"PanTool"},{"id":"e79d0dba-54a9-4aee-810e-46f9349c4d50","type":"WheelZoomTool"},{"id":"7b5c785d-2a2a-4591-a9ff-7d683f546f66","type":"BoxZoomTool"},{"id":"71535ca1-7f05-40b0-8d32-a4eef38a1982","type":"SaveTool"},{"id":"07d75a04-8e1d-4377-9b22-1e4aea7dd4fc","type":"ResetTool"},{"id":"ad5c3707-f2a8-4930-bdcb-72b3f0a4dcd4","type":"HelpTool"},{"id":"ee4d74a6-e28a-476c-93f0-bf65340fa90c","type":"PanTool"},{"id":"7f6ff1b3-48be-48e5-a34b-54346b6e6d75","type":"WheelZoomTool"},{"id":"95238c94-20d1-4b06-935f-0099d92de4b0","type":"BoxZoomTool"},{"id":"05de7cde-6f98-4b99-b801-76d356fda3b1","type":"SaveTool"},{"id":"bf22c179-90e7-45c4-922f-504c40013cdf","type":"ResetTool"},{"id":"21cb5bc1-012c-4135-9197-cb911c0d4d0e","type":"HelpTool"},{"id":"9e31d344-1915-47ea-86be-4d07b982fc00","type":"PanTool"},{"id":"cbf413dd-d4cd-493d-b4ab-5f8795b63e83","type":"WheelZoomTool"},{"id":"8b7f40e3-49a8-43d0-88ad-7294ab999853","type":"BoxZoomTool"},{"id":"cb2d914e-6416-4dea-94d4-d87777fcd503","type":"SaveTool"},{"id":"32478305-b70b-487d-9a5c-502424a65e43","type":"ResetTool"},{"id":"ff853e9d-f80c-4f07-aad7-f35913d2c99c","type":"HelpTool"}]},"id":"189c14ad-5ef1-4650-be5d-ec5108a82d08","type":"ToolbarBox"},{"attributes":{"plot":{"id":"20d07a01-a073-44b9-b83b-ee77ef2b3052","subtype":"Figure","type":"Plot"},"ticker":{"id":"de58ff08-0790-46bc-8e1f-0aa22ac2ed23","type":"BasicTicker"}},"id":"bec7f4a1-1a91-47f9-afeb-b9cd5aee4d79","type":"Grid"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"1aced012-a790-4a4b-880f-1e5ee452f47f","type":"ColumnDataSource"},{"attributes":{"callback":null},"id":"85547ee2-3b40-4bb8-92a5-d319265ba3af","type":"DataRange1d"},{"attributes":{},"id":"bf22c179-90e7-45c4-922f-504c40013cdf","type":"ResetTool"},{"attributes":{"source":{"id":"1aced012-a790-4a4b-880f-1e5ee452f47f","type":"ColumnDataSource"}},"id":"f2e1ddaa-fdd0-4e00-84c9-82b2515bc3a9","type":"CDSView"},{"attributes":{"overlay":{"id":"d22f1f0b-283f-4dec-861a-25e387747abe","type":"BoxAnnotation"}},"id":"95238c94-20d1-4b06-935f-0099d92de4b0","type":"BoxZoomTool"},{"attributes":{},"id":"9e31d344-1915-47ea-86be-4d07b982fc00","type":"PanTool"},{"attributes":{},"id":"6dca5d0d-aff5-40d4-a3c8-be6e5ad86f6d","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"8f5979e4-f057-4a5b-9593-8c80fef1c454","type":"ColumnDataSource"}},"id":"94926b7a-6ed4-458b-a583-3d4352b11716","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"14380c37-3121-4e6f-be46-15c44c5be9b0","type":"BoxAnnotation"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"8f5979e4-f057-4a5b-9593-8c80fef1c454","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"103d003c-2c4c-4089-9d4a-c50c823046a2","type":"LinearAxis"}],"left":[{"id":"ab247465-0acc-4304-be80-ac38d5609dbc","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"103d003c-2c4c-4089-9d4a-c50c823046a2","type":"LinearAxis"},{"id":"ca5d82a9-6a80-42bd-9491-99a67c4363db","type":"Grid"},{"id":"ab247465-0acc-4304-be80-ac38d5609dbc","type":"LinearAxis"},{"id":"22835bc2-7776-4500-8655-110780500d6d","type":"Grid"},{"id":"d22f1f0b-283f-4dec-861a-25e387747abe","type":"BoxAnnotation"},{"id":"869d9181-81b8-4c6c-afa4-def791e63cfc","type":"GlyphRenderer"}],"title":{"id":"8cbfbc6d-cdeb-454a-a444-4178eb88af77","type":"Title"},"toolbar":{"id":"314aac61-c18f-4773-b2a9-696f61197634","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"da661103-b769-42d4-acf4-f257a245ba20","type":"DataRange1d"},"x_scale":{"id":"55f9768d-a3eb-43b0-803b-65ec28241e12","type":"LinearScale"},"y_range":{"id":"1f33daa3-292f-47fc-9faf-7a4a2616b3ff","type":"DataRange1d"},"y_scale":{"id":"aa9b9c02-16a7-46c0-a3c4-465832264c7b","type":"LinearScale"}},"id":"af219ce3-3bcf-47c5-8441-0ee810cf46a6","subtype":"Figure","type":"Plot"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3c466f9-0b8f-4d5d-846c-50e761e57781","type":"Square"},{"attributes":{"plot":{"id":"af219ce3-3bcf-47c5-8441-0ee810cf46a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"1c8620a8-64dc-4a96-aafd-a4f593bb868e","type":"BasicTicker"}},"id":"ca5d82a9-6a80-42bd-9491-99a67c4363db","type":"Grid"},{"attributes":{},"id":"02a10b1a-ad52-4ae9-b4d3-a8191e81f875","type":"PanTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"2ad8ca34-d81e-409b-94bc-5f97d9867650","type":"Circle"},{"attributes":{},"id":"41b78c08-bfa8-4a85-9927-49c8bf9a9bce","type":"BasicTicker"},{"attributes":{"formatter":{"id":"d2e75a0e-b661-4168-89d2-a22e4eb24887","type":"BasicTickFormatter"},"plot":{"id":"af219ce3-3bcf-47c5-8441-0ee810cf46a6","subtype":"Figure","type":"Plot"},"ticker":{"id":"3d1246eb-04c7-43e6-99dc-65862ce668d9","type":"BasicTicker"}},"id":"ab247465-0acc-4304-be80-ac38d5609dbc","type":"LinearAxis"},{"attributes":{},"id":"e73b3e67-015b-42e4-8fe0-7fb3de70105b","type":"BasicTickFormatter"},{"attributes":{},"id":"55f9768d-a3eb-43b0-803b-65ec28241e12","type":"LinearScale"},{"attributes":{},"id":"081d2674-f7b4-468b-ba9c-117d19ece2f8","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"a26adbf5-31df-4f9e-8079-584f5df94cda","type":"ColumnDataSource"},{"attributes":{},"id":"3d1246eb-04c7-43e6-99dc-65862ce668d9","type":"BasicTicker"},{"attributes":{"callback":null},"id":"d2d085ec-bba2-4941-b238-d831f3a4fc41","type":"DataRange1d"},{"attributes":{"source":{"id":"a26adbf5-31df-4f9e-8079-584f5df94cda","type":"ColumnDataSource"}},"id":"fe702812-1957-44b4-aeba-ea389fdde9ec","type":"CDSView"},{"attributes":{},"id":"71535ca1-7f05-40b0-8d32-a4eef38a1982","type":"SaveTool"},{"attributes":{"formatter":{"id":"7ce89699-f85c-43c0-a424-6e6c402ad99f","type":"BasicTickFormatter"},"plot":{"id":"bd07a23d-7a31-4348-85f7-d84b3a450840","subtype":"Figure","type":"Plot"},"ticker":{"id":"9f444dd2-730e-4260-ba0b-75b905e21a71","type":"BasicTicker"}},"id":"51803530-124c-4508-9ed1-78e84b4d741e","type":"LinearAxis"}],"root_ids":["7f89d2e4-4439-435f-82bd-34d2e27309f0"]},"title":"Bokeh Application","version":"0.12.10"}};
                    var render_items = [{"docid":"149bb989-32a4-4963-9bd3-977b22d74b13","elementid":"f285fa68-8d5b-4a4c-b5fe-f871bffb1195","modelid":"7f89d2e4-4439-435f-82bd-34d2e27309f0"}];
                
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  }
                
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to embed document because BokehJS library is missing")
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.10.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.10.min.css");
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
