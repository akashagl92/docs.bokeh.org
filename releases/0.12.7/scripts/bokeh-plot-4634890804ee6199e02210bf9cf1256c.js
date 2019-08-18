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
      };var element = document.getElementById("d07051b0-33f0-466e-ac7f-81ab828e405d");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'd07051b0-33f0-466e-ac7f-81ab828e405d' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-0.12.7.min.js"];
    
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
                var docs_json = {"272da984-75c9-40f9-8118-008a8984bc6d":{"roots":{"references":[{"attributes":{"formatter":{"id":"52d1743d-077c-474f-815f-eb3a01e7ba3b","type":"BasicTickFormatter"},"plot":{"id":"0edc97e0-5107-46fc-875a-e223291fa6d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"95df3e25-691c-4de4-baeb-4903bd032494","type":"BasicTicker"}},"id":"b59b56b0-00c6-4ec6-afcc-c395977749ca","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"7f103050-8a37-4124-8310-8adeafbdd83b","type":"Square"},{"attributes":{"plot":{"id":"0edc97e0-5107-46fc-875a-e223291fa6d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"95df3e25-691c-4de4-baeb-4903bd032494","type":"BasicTicker"}},"id":"0ce23810-4f34-4328-ac61-6dd9fa99f742","type":"Grid"},{"attributes":{},"id":"81c080fa-6636-4631-b48f-305beb331d7d","type":"HelpTool"},{"attributes":{},"id":"ae476875-d164-4d6a-bb2f-5b0e87029306","type":"LinearScale"},{"attributes":{"callback":null},"id":"cddd080c-4ba1-4dcc-bd80-8d20dee1cd36","type":"DataRange1d"},{"attributes":{},"id":"a6b7dd3a-dc59-428f-a242-97c7e85eac42","type":"WheelZoomTool"},{"attributes":{"children":[{"id":"5b9e13be-ee15-4d3b-9793-c83dbc7b17bd","type":"ToolbarBox"},{"id":"c052dd62-f85f-4c2f-8897-8bb376ca8c53","type":"Column"}]},"id":"c0748cf3-66ec-4964-b0b5-4741e569fa13","type":"Column"},{"attributes":{"children":[{"id":"e5edbf7b-f38f-43fd-a429-5c716d20b5b0","subtype":"Figure","type":"Plot"},{"id":"0edc97e0-5107-46fc-875a-e223291fa6d3","subtype":"Figure","type":"Plot"}]},"id":"67bb7f98-8d60-43bc-bf9c-4604fa791366","type":"Row"},{"attributes":{"callback":null},"id":"6bfc63c8-cf17-4f82-9777-e394035a8afa","type":"DataRange1d"},{"attributes":{"below":[{"id":"1356becf-d655-4853-801c-4aa2b4c578b9","type":"LinearAxis"}],"left":[{"id":"bd9cc2c5-14fb-46ad-b774-b9a1e750fa6f","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"1356becf-d655-4853-801c-4aa2b4c578b9","type":"LinearAxis"},{"id":"9aeb5115-d605-49f6-8ab0-4a10247349c1","type":"Grid"},{"id":"bd9cc2c5-14fb-46ad-b774-b9a1e750fa6f","type":"LinearAxis"},{"id":"a4a3a99c-95ac-44d8-b1ea-3f137366b689","type":"Grid"},{"id":"db91e93a-d2b7-48bb-808d-b39acd8ef80e","type":"BoxAnnotation"},{"id":"412b225c-e7e2-41b5-b6e8-cfcb8c7b4f38","type":"GlyphRenderer"}],"title":{"id":"0c5e3e6f-0e0c-47f3-8a88-999b7849c12b","type":"Title"},"toolbar":{"id":"b958f095-fdb2-4528-ab69-b93b9c25cda4","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"910cbab7-b085-4eda-b40f-c1413baf1dde","type":"DataRange1d"},"x_scale":{"id":"5e8c90f3-d6b6-4687-9519-d63e867d0970","type":"LinearScale"},"y_range":{"id":"440a7543-7660-4075-9042-1fc01ef726eb","type":"DataRange1d"},"y_scale":{"id":"6f623b6b-ff6d-41db-852d-ca133811ce42","type":"LinearScale"}},"id":"e5edbf7b-f38f-43fd-a429-5c716d20b5b0","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"78f5c3d7-a98b-48a3-ae37-fe350ac3d861","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3651df4e-760f-46fb-9327-068cb1d05dc7","type":"BoxAnnotation"},{"attributes":{"overlay":{"id":"db91e93a-d2b7-48bb-808d-b39acd8ef80e","type":"BoxAnnotation"}},"id":"3e6d4fe9-def4-4ce4-9214-a900c2d8baec","type":"BoxZoomTool"},{"attributes":{"dimension":1,"plot":{"id":"0edc97e0-5107-46fc-875a-e223291fa6d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"653ee73d-b09c-4b8b-96f8-8de5d7eeb0b7","type":"BasicTicker"}},"id":"19d1021f-fc22-4581-8df2-6af282bcf08b","type":"Grid"},{"attributes":{"plot":{"id":"23e51487-e97c-4bda-87cf-793367569d7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"18222ff1-9001-468c-a858-4766a5802532","type":"BasicTicker"}},"id":"955553c4-a185-4fcc-beff-9678e7e18cc4","type":"Grid"},{"attributes":{},"id":"7f10c6ca-bc7b-4e15-9467-0c780d7b8843","type":"BasicTicker"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"ddc707d3-8e17-4c16-a8bb-3d68b349a18d","type":"PanTool"},{"id":"a6b7dd3a-dc59-428f-a242-97c7e85eac42","type":"WheelZoomTool"},{"id":"3e6d4fe9-def4-4ce4-9214-a900c2d8baec","type":"BoxZoomTool"},{"id":"fd61defb-f4f7-483a-a5bd-d23a19f3deb4","type":"SaveTool"},{"id":"50ea7293-f05f-44a7-87c3-28791ec2b104","type":"ResetTool"},{"id":"852c0f35-5e75-4339-a7fd-3a20d02ac82a","type":"HelpTool"}]},"id":"b958f095-fdb2-4528-ab69-b93b9c25cda4","type":"Toolbar"},{"attributes":{"formatter":{"id":"56029d54-9199-4ec4-a104-679c7cd56d8c","type":"BasicTickFormatter"},"plot":{"id":"e5edbf7b-f38f-43fd-a429-5c716d20b5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f10c6ca-bc7b-4e15-9467-0c780d7b8843","type":"BasicTicker"}},"id":"bd9cc2c5-14fb-46ad-b774-b9a1e750fa6f","type":"LinearAxis"},{"attributes":{"data_source":{"id":"2ddac2f6-dc45-4f20-a780-eaee0f6e5670","type":"ColumnDataSource"},"glyph":{"id":"ee85cc06-7e27-43dc-b761-a02ace9b2910","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3580dec4-d9bd-4dd8-82ae-1313dc80b8ff","type":"Circle"},"selection_glyph":null,"view":{"id":"79641759-69c2-4c47-9aaa-80c78034b592","type":"CDSView"}},"id":"412b225c-e7e2-41b5-b6e8-cfcb8c7b4f38","type":"GlyphRenderer"},{"attributes":{},"id":"fd61defb-f4f7-483a-a5bd-d23a19f3deb4","type":"SaveTool"},{"attributes":{"data_source":{"id":"db82d588-2d4b-41c4-a9ae-41507727eb4e","type":"ColumnDataSource"},"glyph":{"id":"54724d90-7071-4d4f-b5ee-edc6f3fb099a","type":"Square"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"7f103050-8a37-4124-8310-8adeafbdd83b","type":"Square"},"selection_glyph":null,"view":{"id":"df4d22ca-fa25-42ea-a618-ba50d8ece1e4","type":"CDSView"}},"id":"b7fbcda4-b276-4065-84e8-db2e6775855e","type":"GlyphRenderer"},{"attributes":{},"id":"d2fa8746-8caa-4c4a-91fa-5b45f0120277","type":"LinearScale"},{"attributes":{"formatter":{"id":"e83ee73e-cdda-493d-b15a-d9b9832190f8","type":"BasicTickFormatter"},"plot":{"id":"0edc97e0-5107-46fc-875a-e223291fa6d3","subtype":"Figure","type":"Plot"},"ticker":{"id":"653ee73d-b09c-4b8b-96f8-8de5d7eeb0b7","type":"BasicTicker"}},"id":"14365767-d78b-40cd-a6a8-ddbfcc7ba1e3","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"22eb4df2-1805-4b5e-8aac-3cd7b59b6672","type":"Title"},{"attributes":{"below":[{"id":"b59b56b0-00c6-4ec6-afcc-c395977749ca","type":"LinearAxis"}],"left":[{"id":"14365767-d78b-40cd-a6a8-ddbfcc7ba1e3","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"b59b56b0-00c6-4ec6-afcc-c395977749ca","type":"LinearAxis"},{"id":"0ce23810-4f34-4328-ac61-6dd9fa99f742","type":"Grid"},{"id":"14365767-d78b-40cd-a6a8-ddbfcc7ba1e3","type":"LinearAxis"},{"id":"19d1021f-fc22-4581-8df2-6af282bcf08b","type":"Grid"},{"id":"cf491605-313f-41ea-944f-f6bf1895d8f1","type":"BoxAnnotation"},{"id":"706d650e-adb4-4ffb-9ac1-73838d31183c","type":"GlyphRenderer"}],"title":{"id":"22eb4df2-1805-4b5e-8aac-3cd7b59b6672","type":"Title"},"toolbar":{"id":"1b32a53e-12cd-412a-adf2-1271087eb429","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"1403ac23-7fff-42a7-a4a2-d81a307106f5","type":"DataRange1d"},"x_scale":{"id":"cf8b6ddd-2b41-458c-a653-b6d6b58e7a87","type":"LinearScale"},"y_range":{"id":"6bfc63c8-cf17-4f82-9777-e394035a8afa","type":"DataRange1d"},"y_scale":{"id":"d2fa8746-8caa-4c4a-91fa-5b45f0120277","type":"LinearScale"}},"id":"0edc97e0-5107-46fc-875a-e223291fa6d3","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"fad9d750-b156-4965-b4ac-70038c0b6110","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[5,4,3,2,1,0,1,2,3,4,5]}},"id":"db82d588-2d4b-41c4-a9ae-41507727eb4e","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"2dca4645-0da3-4f59-b871-4c7a024c4322","type":"BasicTickFormatter"},"plot":{"id":"23e51487-e97c-4bda-87cf-793367569d7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f02fafa5-0911-4ed1-b8a3-3ba37bca4e13","type":"BasicTicker"}},"id":"03ea799f-0398-4529-8abb-6b634a05f54d","type":"LinearAxis"},{"attributes":{},"id":"95df3e25-691c-4de4-baeb-4903bd032494","type":"BasicTicker"},{"attributes":{"dimension":1,"plot":{"id":"e5edbf7b-f38f-43fd-a429-5c716d20b5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"7f10c6ca-bc7b-4e15-9467-0c780d7b8843","type":"BasicTicker"}},"id":"a4a3a99c-95ac-44d8-b1ea-3f137366b689","type":"Grid"},{"attributes":{},"id":"56029d54-9199-4ec4-a104-679c7cd56d8c","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#FDE724"},"line_color":{"value":"#FDE724"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"54724d90-7071-4d4f-b5ee-edc6f3fb099a","type":"Square"},{"attributes":{},"id":"6e0a8aeb-0995-490c-b480-039c3946896a","type":"BasicTickFormatter"},{"attributes":{},"id":"f02fafa5-0911-4ed1-b8a3-3ba37bca4e13","type":"BasicTicker"},{"attributes":{},"id":"7f89f0f7-845a-475b-bd19-32d7c9c98d53","type":"HelpTool"},{"attributes":{"formatter":{"id":"8ad9efe2-0e7d-40b8-9cc7-3e7cabec782f","type":"BasicTickFormatter"},"plot":{"id":"23e51487-e97c-4bda-87cf-793367569d7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"18222ff1-9001-468c-a858-4766a5802532","type":"BasicTicker"}},"id":"76432de6-9395-4df3-8ea9-ecb2dfac70b4","type":"LinearAxis"},{"attributes":{},"id":"653ee73d-b09c-4b8b-96f8-8de5d7eeb0b7","type":"BasicTicker"},{"attributes":{},"id":"e83ee73e-cdda-493d-b15a-d9b9832190f8","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"3580dec4-d9bd-4dd8-82ae-1313dc80b8ff","type":"Circle"},{"attributes":{"dimension":1,"plot":{"id":"23e51487-e97c-4bda-87cf-793367569d7e","subtype":"Figure","type":"Plot"},"ticker":{"id":"f02fafa5-0911-4ed1-b8a3-3ba37bca4e13","type":"BasicTicker"}},"id":"35ea2a1b-fbba-46ed-a949-45a7297f0109","type":"Grid"},{"attributes":{},"id":"6f623b6b-ff6d-41db-852d-ca133811ce42","type":"LinearScale"},{"attributes":{"sizing_mode":"scale_width","toolbar_location":"above","tools":[{"id":"ddc707d3-8e17-4c16-a8bb-3d68b349a18d","type":"PanTool"},{"id":"a6b7dd3a-dc59-428f-a242-97c7e85eac42","type":"WheelZoomTool"},{"id":"3e6d4fe9-def4-4ce4-9214-a900c2d8baec","type":"BoxZoomTool"},{"id":"fd61defb-f4f7-483a-a5bd-d23a19f3deb4","type":"SaveTool"},{"id":"50ea7293-f05f-44a7-87c3-28791ec2b104","type":"ResetTool"},{"id":"852c0f35-5e75-4339-a7fd-3a20d02ac82a","type":"HelpTool"},{"id":"c5d6d2af-2021-4f78-9ed7-5dfe4ced87a4","type":"PanTool"},{"id":"41f29ec9-e595-4005-b921-ae0786ed3780","type":"WheelZoomTool"},{"id":"484b3c7c-c23a-4e1f-be7a-80830e7b63a6","type":"BoxZoomTool"},{"id":"8d994268-90b8-466f-86cc-e7456d53f818","type":"SaveTool"},{"id":"384aa58c-4edd-4147-99ec-4de1b083aa77","type":"ResetTool"},{"id":"7f89f0f7-845a-475b-bd19-32d7c9c98d53","type":"HelpTool"},{"id":"230f4042-0f0d-413d-8a52-5592e94cb183","type":"PanTool"},{"id":"44cd5dad-737e-47de-b797-055255341ee3","type":"WheelZoomTool"},{"id":"f1c37422-9f8d-4292-a2f7-530fe5764ee3","type":"BoxZoomTool"},{"id":"fad9d750-b156-4965-b4ac-70038c0b6110","type":"SaveTool"},{"id":"78f5c3d7-a98b-48a3-ae37-fe350ac3d861","type":"ResetTool"},{"id":"81c080fa-6636-4631-b48f-305beb331d7d","type":"HelpTool"}]},"id":"5b9e13be-ee15-4d3b-9793-c83dbc7b17bd","type":"ToolbarBox"},{"attributes":{},"id":"ddc707d3-8e17-4c16-a8bb-3d68b349a18d","type":"PanTool"},{"attributes":{"formatter":{"id":"6e0a8aeb-0995-490c-b480-039c3946896a","type":"BasicTickFormatter"},"plot":{"id":"e5edbf7b-f38f-43fd-a429-5c716d20b5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"890d583e-e28c-44a9-9329-73804356f7fa","type":"BasicTicker"}},"id":"1356becf-d655-4853-801c-4aa2b4c578b9","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"c5d6d2af-2021-4f78-9ed7-5dfe4ced87a4","type":"PanTool"},{"id":"41f29ec9-e595-4005-b921-ae0786ed3780","type":"WheelZoomTool"},{"id":"484b3c7c-c23a-4e1f-be7a-80830e7b63a6","type":"BoxZoomTool"},{"id":"8d994268-90b8-466f-86cc-e7456d53f818","type":"SaveTool"},{"id":"384aa58c-4edd-4147-99ec-4de1b083aa77","type":"ResetTool"},{"id":"7f89f0f7-845a-475b-bd19-32d7c9c98d53","type":"HelpTool"}]},"id":"1b32a53e-12cd-412a-adf2-1271087eb429","type":"Toolbar"},{"attributes":{"children":[{"id":"67bb7f98-8d60-43bc-bf9c-4604fa791366","type":"Row"},{"id":"92b24146-92fe-40d0-8d05-893cd1803af1","type":"Row"}]},"id":"c052dd62-f85f-4c2f-8897-8bb376ca8c53","type":"Column"},{"attributes":{"plot":null,"text":""},"id":"f86ca1ac-8e12-4325-890d-b1d20f88791b","type":"Title"},{"attributes":{"source":{"id":"2ddac2f6-dc45-4f20-a780-eaee0f6e5670","type":"ColumnDataSource"}},"id":"79641759-69c2-4c47-9aaa-80c78034b592","type":"CDSView"},{"attributes":{"callback":null},"id":"1403ac23-7fff-42a7-a4a2-d81a307106f5","type":"DataRange1d"},{"attributes":{},"id":"5e8c90f3-d6b6-4687-9519-d63e867d0970","type":"LinearScale"},{"attributes":{},"id":"8ad9efe2-0e7d-40b8-9cc7-3e7cabec782f","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#208F8C"},"line_color":{"value":"#208F8C"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"65c05666-c1a8-428f-9906-2c64bf86bc4f","type":"Triangle"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[0,1,2,3,4,5,6,7,8,9,10]}},"id":"2ddac2f6-dc45-4f20-a780-eaee0f6e5670","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"76432de6-9395-4df3-8ea9-ecb2dfac70b4","type":"LinearAxis"}],"left":[{"id":"03ea799f-0398-4529-8abb-6b634a05f54d","type":"LinearAxis"}],"plot_height":250,"plot_width":250,"renderers":[{"id":"76432de6-9395-4df3-8ea9-ecb2dfac70b4","type":"LinearAxis"},{"id":"955553c4-a185-4fcc-beff-9678e7e18cc4","type":"Grid"},{"id":"03ea799f-0398-4529-8abb-6b634a05f54d","type":"LinearAxis"},{"id":"35ea2a1b-fbba-46ed-a949-45a7297f0109","type":"Grid"},{"id":"3651df4e-760f-46fb-9327-068cb1d05dc7","type":"BoxAnnotation"},{"id":"b7fbcda4-b276-4065-84e8-db2e6775855e","type":"GlyphRenderer"}],"title":{"id":"f86ca1ac-8e12-4325-890d-b1d20f88791b","type":"Title"},"toolbar":{"id":"b40d0e26-94eb-4eda-b1e3-7b1632d0be0d","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"f6b12860-846e-405c-82d9-d07031025e63","type":"DataRange1d"},"x_scale":{"id":"ae476875-d164-4d6a-bb2f-5b0e87029306","type":"LinearScale"},"y_range":{"id":"cddd080c-4ba1-4dcc-bd80-8d20dee1cd36","type":"DataRange1d"},"y_scale":{"id":"b698e347-0a62-4e35-9333-355399c06827","type":"LinearScale"}},"id":"23e51487-e97c-4bda-87cf-793367569d7e","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"440a7543-7660-4075-9042-1fc01ef726eb","type":"DataRange1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"230f4042-0f0d-413d-8a52-5592e94cb183","type":"PanTool"},{"id":"44cd5dad-737e-47de-b797-055255341ee3","type":"WheelZoomTool"},{"id":"f1c37422-9f8d-4292-a2f7-530fe5764ee3","type":"BoxZoomTool"},{"id":"fad9d750-b156-4965-b4ac-70038c0b6110","type":"SaveTool"},{"id":"78f5c3d7-a98b-48a3-ae37-fe350ac3d861","type":"ResetTool"},{"id":"81c080fa-6636-4631-b48f-305beb331d7d","type":"HelpTool"}]},"id":"b40d0e26-94eb-4eda-b1e3-7b1632d0be0d","type":"Toolbar"},{"attributes":{},"id":"18222ff1-9001-468c-a858-4766a5802532","type":"BasicTicker"},{"attributes":{},"id":"50ea7293-f05f-44a7-87c3-28791ec2b104","type":"ResetTool"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[0,1,2,3,4,5,6,7,8,9,10],"y":[10,9,8,7,6,5,4,3,2,1,0]}},"id":"02b773ce-9089-4534-8625-40f0c32da522","type":"ColumnDataSource"},{"attributes":{},"id":"384aa58c-4edd-4147-99ec-4de1b083aa77","type":"ResetTool"},{"attributes":{"plot":{"id":"e5edbf7b-f38f-43fd-a429-5c716d20b5b0","subtype":"Figure","type":"Plot"},"ticker":{"id":"890d583e-e28c-44a9-9329-73804356f7fa","type":"BasicTicker"}},"id":"9aeb5115-d605-49f6-8ab0-4a10247349c1","type":"Grid"},{"attributes":{},"id":"852c0f35-5e75-4339-a7fd-3a20d02ac82a","type":"HelpTool"},{"attributes":{},"id":"cf8b6ddd-2b41-458c-a653-b6d6b58e7a87","type":"LinearScale"},{"attributes":{},"id":"8d994268-90b8-466f-86cc-e7456d53f818","type":"SaveTool"},{"attributes":{},"id":"230f4042-0f0d-413d-8a52-5592e94cb183","type":"PanTool"},{"attributes":{},"id":"b698e347-0a62-4e35-9333-355399c06827","type":"LinearScale"},{"attributes":{"callback":null},"id":"f6b12860-846e-405c-82d9-d07031025e63","type":"DataRange1d"},{"attributes":{},"id":"44cd5dad-737e-47de-b797-055255341ee3","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"02b773ce-9089-4534-8625-40f0c32da522","type":"ColumnDataSource"},"glyph":{"id":"65c05666-c1a8-428f-9906-2c64bf86bc4f","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"ee368f58-e6b8-467d-86d4-8b4fefd7ee6a","type":"Triangle"},"selection_glyph":null,"view":{"id":"6801196d-aecd-429d-ab9e-b87aa9b59196","type":"CDSView"}},"id":"706d650e-adb4-4ffb-9ac1-73838d31183c","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cf491605-313f-41ea-944f-f6bf1895d8f1","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"db91e93a-d2b7-48bb-808d-b39acd8ef80e","type":"BoxAnnotation"},{"attributes":{},"id":"41f29ec9-e595-4005-b921-ae0786ed3780","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"910cbab7-b085-4eda-b40f-c1413baf1dde","type":"DataRange1d"},{"attributes":{"overlay":{"id":"cf491605-313f-41ea-944f-f6bf1895d8f1","type":"BoxAnnotation"}},"id":"484b3c7c-c23a-4e1f-be7a-80830e7b63a6","type":"BoxZoomTool"},{"attributes":{},"id":"2dca4645-0da3-4f59-b871-4c7a024c4322","type":"BasicTickFormatter"},{"attributes":{"source":{"id":"db82d588-2d4b-41c4-a9ae-41507727eb4e","type":"ColumnDataSource"}},"id":"df4d22ca-fa25-42ea-a618-ba50d8ece1e4","type":"CDSView"},{"attributes":{"fill_color":{"value":"#440154"},"line_color":{"value":"#440154"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee85cc06-7e27-43dc-b761-a02ace9b2910","type":"Circle"},{"attributes":{},"id":"52d1743d-077c-474f-815f-eb3a01e7ba3b","type":"BasicTickFormatter"},{"attributes":{},"id":"c5d6d2af-2021-4f78-9ed7-5dfe4ced87a4","type":"PanTool"},{"attributes":{"children":[{"id":"23e51487-e97c-4bda-87cf-793367569d7e","subtype":"Figure","type":"Plot"}]},"id":"92b24146-92fe-40d0-8d05-893cd1803af1","type":"Row"},{"attributes":{"plot":null,"text":""},"id":"0c5e3e6f-0e0c-47f3-8a88-999b7849c12b","type":"Title"},{"attributes":{"overlay":{"id":"3651df4e-760f-46fb-9327-068cb1d05dc7","type":"BoxAnnotation"}},"id":"f1c37422-9f8d-4292-a2f7-530fe5764ee3","type":"BoxZoomTool"},{"attributes":{},"id":"890d583e-e28c-44a9-9329-73804356f7fa","type":"BasicTicker"},{"attributes":{"source":{"id":"02b773ce-9089-4534-8625-40f0c32da522","type":"ColumnDataSource"}},"id":"6801196d-aecd-429d-ab9e-b87aa9b59196","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":10},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee368f58-e6b8-467d-86d4-8b4fefd7ee6a","type":"Triangle"}],"root_ids":["c0748cf3-66ec-4964-b0b5-4741e569fa13"]},"title":"Bokeh Application","version":"0.12.7"}};
                var render_items = [{"docid":"272da984-75c9-40f9-8118-008a8984bc6d","elementid":"d07051b0-33f0-466e-ac7f-81ab828e405d","modelid":"c0748cf3-66ec-4964-b0b5-4741e569fa13"}];
                
                Bokeh.embed.embed_items(docs_json, render_items);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-widgets-0.12.7.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
          Bokeh.embed.inject_css("https://cdn.bokeh.org/bokeh/release/bokeh-tables-0.12.7.min.css");
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
